const express = require('express');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 4500;
const app = express();






app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`));




