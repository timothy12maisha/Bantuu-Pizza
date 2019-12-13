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