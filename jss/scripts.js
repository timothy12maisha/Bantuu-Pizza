$(document).ready(function(){
    $("#smallPizza,#mediumPizza,#largePizza").hover(function (){
        $(this)
            .find(".overlay")
            .show();
    },
        function(){
            $(this)
                .find(".overlay")
                .hide();
        }
    );
});
$(document).ready(function(){
    $("#smallPizza").click(function(){
      $("#optionsSmall").slideToggle();
    });
  });
$(document).ready(function(){
    $("#mediumPizza").click(function(){
      $("#optionsMedium").slideToggle();
    });
  });
$(document).ready(function(){
    $("#largePizza").click(function(){
      $("#optionsLarge").slideToggle();
    });
  });

  $(document).ready(function(){
    window.validateForm = function(){
      var crust = parseInt($("input[name='crust']:checked").val());
      var toppings = parseInt($("input[name='toppings']:checked").val()) ;
      var number = $(".number").val();
      // alert(crustName)
      // alert(number);
      // alert(crust);
            // if(toppings){
            //   alert(toppings);
            // }
            $(document).submit(function(){ event.preventDefault()
              $(".total").text((crust+toppings) * number)
       });
    };

    window.validateForm2 = function(){
      var crust = parseInt($("input[name='crust']:checked").val()); 
      var toppings = parseInt($("input[name='toppings']:checked").val()) ;
      var number = $("#number").val();
      // alert(number);
      // alert(crust);
      //       if(toppings){
      //         alert(toppings);
      //       }
            $(document).submit(function(){ event.preventDefault()
              $(".total").text((crust+toppings) * number)
       });
    };
    
    window.validateForm3 = function(){
      var crust = parseInt($("input[name='crust']:checked").val()); 
      var toppings = parseInt($("input[name='toppings']:checked").val()) ;
      var number = $("#number3").val();
      // alert(number);
      // alert(crust);
      //       if(toppings){
      //         alert(toppings);
      //       }
            $(document).submit(function(){ event.preventDefault()
              $(".total").text((crust+toppings) * number)
       });
    };

});

 
