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

  $(document).ready(function() {
    window.validateForm = function(){
      var crust = $("input[name='crust']:checked").val();
      var toppings = $("input[type='checkbox']").is(':checked');
      alert(crust);
            if(toppings){
                alert("Your are a - " + toppings);
            }
    };
});