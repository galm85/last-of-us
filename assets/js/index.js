const base_url = "http://localhost:4000";

$('.delete-char').click(function(){
  let id = $(this).attr("data-id");
  
  $.ajax({
      "url":`${base_url}/api/characters/delete/${id}`,
      "method":"DELETE"
  }).done(function(response){
      alert(response);
      location.reload();
  })

})