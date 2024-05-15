$("div .btn-t1").on("click", function(){
    $(".option-select").removeAttr("hidden");

    setTimeout(function(){
        $(".answer-selections").removeAttr("hidden");
    }, 1000);
});

$(".try").on("click", function(){
    $(".answer-hidden").removeAttr("hidden");

    setTimeout(function(){
        $(".answer-confirmation").removeAttr("hidden");
    }, 1000);
});