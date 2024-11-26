
var dogcount = 0;
var dogwhine = document.getElementById("dogwhine");

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

$("#Cat").on("click", function () {
    console.log("clicked on cat");

});