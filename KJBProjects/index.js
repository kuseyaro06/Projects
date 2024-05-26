$("div .btn-t1").on("click", function(){
    $(".topic-select").removeAttr("hidden");

    setTimeout(function(){
        $(".answer-selections").removeAttr("hidden");
    }, 1000);
});

$(".topic-select-answers").on("click", function(){
    $(".answer-hidden").removeAttr("hidden");

    setTimeout(function(){
        $(".answer-confirmation").removeAttr("hidden");
    }, 1000);
});