

$(document).ready(function(){
  $.get ("https://www.kia.si/naloga_api", function(data) {
    var jsonObj = jQuery.parseJSON(data);

    console.log(jsonObj);//

    $.each(jsonObj, function( index, value ) {
      $(".car").append('<div class="col-md-4"> <div class="card" style="width: 100%;"> <img class="card-img-top" src="' + value.picture +
      '" alt="Card image cap"> <div class="card-body row"> <div class="col-sm-7"> <h5 class="car-title">' + value.name +
      '</5> </div> <div class="col-sm-5 right"> <a target="_blank" href="' + value.web_link +
      '" class="card-link">Preberi več</a> </div> <div class="col-md-12 cena-div"> <p class="cena">Že za ' + value.price_wrapper.price +
      '€!</p> </div> </div> </div> </div>');
    });


    });
});


  //$(".list-group-item").text(obj[557//].name);
