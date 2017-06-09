$(document).ready(function(){
$('#search').click(function(){
  var searchT = $('#searchT').val();
  
  $.ajax({
    
    type: 'GET',
    url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchT + '&callback=?',
    async: false,
    dataType: 'json',
    success: function(value){
    
      
      $('#results').html('');
      
      for(var i = 0; i<=15; i++){
        $('#results').append('<a href=' + value[3][i] + ' target= "blank">' + value[1][i] + '</h1></a><h3>'+ value[2][i] + '</h3><br>' );
      }
    },
    error:function(err){
      alert("Error")
    },
  })  
});     $('#searchT').bind('keypress', function(e){
    if (e.keyCode == 13){
      $('#search').click();
    }
  })
});