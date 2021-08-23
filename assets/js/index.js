

$('.delete-char').click(function(){
  let id = $(this).attr("data-id");
  
  $.ajax({
      "url":`http://localhost:4000/api/characters/delete/${id}`,
      "method":"DELETE"
  }).done(function(response){
      alert(response);
      location.reload();
  })

})