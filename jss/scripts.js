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
      var toppings = parseInt($("input[name='toppings']:checked").val());
      alert(crust);
            if(toppings){
              alert(toppings);
            }
            $(document).submit(function(){ event.preventDefault()
              $(".total").text(crust+toppings)
            });
    };
});
$(document).ready(function(){
  window.validateForm = function(){
    var crust1 = parseInt($("input[name='crust1']:checked").val()); 
    var toppings1 = parseInt($("input[name='toppings1']:checked").val());
    alert(crust1);
          if(toppings1){
            alert(toppings1);
          }
          $(document).submit(function(){ event.preventDefault()
            $(".total1").text(crust1+toppings1)
          });
  };
});
$(document).ready(function(){
  window.validateForm = function(){
    var crust2 = parseInt($("input[name='crust2']:checked").val()); 
    var toppings2 = parseInt($("input[name='toppings2']:checked").val());
    alert(crust2);
          if(toppings2){
            alert(toppings2);
          }
          $(document).submit(function(){ event.preventDefault()
            $(".total2").text(crust2+toppings2)
          });
  };
});