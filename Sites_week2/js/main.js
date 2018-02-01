
$( document ).ready(function() {
    console.log( "ready set go!" );

    $("#emu_button").click(function() {
      console.log("emu!!");
        $('html, body').animate({
            scrollTop: $("#emu").offset().top
        }, 2000);
    });

    $("#dolphin_button").click(function() {
      console.log("emu!!");
        $('html, body').animate({
            scrollTop: $("#dolphin").offset().top
        }, 2000);
    });

    $("#capybara_button").click(function() {
      console.log("emu!!");
        $('html, body').animate({
            scrollTop: $("#capybara").offset().top
        }, 2000);
    });



});
