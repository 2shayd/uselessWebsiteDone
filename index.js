//part 1

//part 2

document.addEventListener("DOMContentLoaded", function (event) {


    document.getElementById("section1Submit").addEventListener("click", function() {
        openAccess();
    });

    function openAccess() {
        var x = document.getElementsByName("section1Choice");
        var radioVal;
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].checked) {
                radioVal = x[i].value;
            }
        }
        console.log(radioVal);
        if (radioVal == 1) {
            document.getElementById("section2").removeAttribute("disabled", "");
            document.getElementById("section3").setAttribute("disabled", "");
        }
        else if (radioVal == 2) {
            document.getElementById("section3").removeAttribute("disabled", "");
            document.getElementById("section2").setAttribute("disabled", "");
        }
    };

});