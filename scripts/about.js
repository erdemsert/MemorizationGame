$(function(){
    $("#Mono").click(function(){
        $("h1#GameName").html("Monopoly");
        $("h1#GameName").css({"color":"darkblue","font-size":"45px"});
        $("div#selectedItem").css("background","url('../images/monopoly.png')");
        $("div#selectedItem").css({"width":"320px","height":"320px","margin-left":"60px"});
    });
    $("#Trivia").click(function(){
       $("h1#GameName").html("Trivial Pursuit");
       $("h1#GameName").css({"color":"orange","font-size":"45px"});
       $("div#selectedItem").css("background","url('../images/Trivial.png')");
       $("div#selectedItem").css({"width":"300px","height":"300px","margin-left":"60px"});
    });
    $("#Tabu").click(function(){
       $("h1#GameName").html("Tabu XL");
       $("h1#GameName").css({"color":"yellow","font-size":"45px"});
       
       $("div#selectedItem").css("background","url('../images/Tabu.png')");
       $("div#selectedItem").css({"width":"299px","height":"289px","margin-left":"60px"});
    });
    $("#Twister").click(function(){
     $("h1#GameName").html("Twister");
     $("h1#GameName").css({"color":"purple","font-size":"45px"});
     $("div#selectedItem").css("background","url('../images/Twister.png')");
     $("div#selectedItem").css({"width":"300px","height":"300px","margin-left":"60px"});

    });

});