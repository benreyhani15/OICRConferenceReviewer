$(document).ready(function(){
  /* if (window.location.hash!=""){
     sendAJAXForReviews(window.location.hash);
   }*/
   $('a').click(function(){
   	 console.log($(this).attr('href'));
     sendAJAXForReviews($(this).attr('href'));
   });

   function sendAJAXForReviews(year){
   	var mYear = year.substring(1,year.length);
   	var url = "./getReviews/" + mYear;
   	var htmlElementsArray = [];
   	console.log(url);
     $.getJSON(url, function(conferences){
     	conferences.forEach(function(conference){
     		var tmpElement = '<a href="conference/'+conference+'"> <h5 class="hyperlinks">'+conference+'</h5> </a>';
     		htmlElementsArray.push(tmpElement);
     	});
     	$('.col-xs-9').empty().append(htmlElementsArray);

     });
   }
});
