

$("h1").text("goodbye");


// $("button").html("<em>hey</em>");

$("h1").addClass("big-title");

$("h1").click(function(){
    $("h1").css("color", "red");
})

// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "#896489");
});

$(".lala").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})

