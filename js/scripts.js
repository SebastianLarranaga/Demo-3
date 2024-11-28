
var dogcount = 0;
var dogwhine = document.getElementById("dogwhine");
var catcount = 0;

$("#Doggo").on("click", function () {
    console.log("clicked on dog");

    dogcount++;
    console.log(dogcount);

    if (dogcount == 1) {
        $("#dog-eye-closed").hide();
        $("#dog-eye-open").show();
    } else if (dogcount == 2) {
        dogwhine.play();
    } else if (dogcount == 3) {
        $("#Doggo").hide();
        $("#Doggo-Play").show();
    }
});

$("#Cat").on("mouseenter", function () {
    console.log("mouse entered on cat");
    $("#cat-eye-closed, #cat-eye-angry").hide();
    $("#cat-eye-open").show();
});
$("#Cat").on("mouseleave", function () {
    console.log("mouse leave");
    $("#cat-eye-closed").show();
    $("#cat-eye-open").hide();
});

$("#Cat").on("click", function () {
    // when we click on the cat, either the eye closes or opens randomly.
    var random = Math.floor(Math.random() * 2);
    //console.log(random);

    if (random == 0) {
        $("#cat-eye-closed").show();
        $("#cat-eye-open, #cat-eye-angry").hide();
    } else {
        $("#cat-eye-angry").show();
        $("#cat-eye-open, #cat-eye-closed").hide();
    }
    catcount++;
    console.log(catcount);
    if (catcount == 10) {
        $("#Cat").fadeOut(2000);
    }
});

var quote1 = "Home is where the humans exist to serve me."
var quote2 = "Home sweet yard"
var quote3 = "Paws and Reflect"
var quote4 = "Hearth and home—and my fur in every corner"

var quotes = [quote1, quote2, quote3, quote4];

var colors = ["#568b62", "#ff976d", "#404E7C", "#62466B", "#073B3A", "#8884FF", "#563440", "#AABD8C"]

var quoteCounter = 0;
function changeQuote() {
    if (quoteCounter == quotes.length) {
        quoteCounter = 0;
    }

    $("blockquote").text(quotes[quoteCounter])
    quoteCounter++;

    var randomColor = Math.floor(Math.random() * colors.length);
    $("body").css("background-color", colors[randomColor]);
}

setInterval(changeQuote, 3000);

