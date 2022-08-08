function myFunction() {
    var checkBox = document.getElementById("eng");
    var text = document.getElementById("engch");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function gujshow() {
    var checkBox = document.getElementById("guj");
    var text = document.getElementById("gujch");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function uguj() {
    var checkBox = document.getElementById("guj");
    var text = document.getElementById("gujch");
    if (checkBox.checked == true) {
        checkBox.checked = false;
        text.style.display = "none";
    }

}
function ueng() {
    var checkBox = document.getElementById("eng");
    var text = document.getElementById("engch");
    if (checkBox.checked == true) {
        checkBox.checked = false;
        text.style.display = "none";
    }

}




