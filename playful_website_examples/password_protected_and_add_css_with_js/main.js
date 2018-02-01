
function check_password() {
    var value = document.getElementById("input_password").value;
    if (value == 'prismatic') {
      // if the password is correct, we add the following CSS to hide/show elements and change colors
        $("#pre_password").css("display", "none");
        $("#post_password").css("display", "block");
        $("body").css("background-color", "aqua");
        $("body").css("color", "coral");
    } else {
        window.alert("try again!");
    }
}
