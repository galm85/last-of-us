const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4500;

//initial app
const app = express();

//connect to DB
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log('connect to MongoDB')).then(app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`)));

//view engine
app.set('view engine','ejs');

//middlwares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json({limit:"10mb"}));

//assests
app.use('/images',express.static(path.resolve(__dirname,'assets/images')));
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));

app.use('/js',express.static(path.resolve(__dirname,'assets/js')));



//routes
app.use('/',require('./server/routes/pages.routes'));
app.use('/admin',require('./server/routes/admin.routes'));
app.use('/api',require('./server/routes/api.routes'));










