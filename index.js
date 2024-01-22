
document.addEventListener("DOMContentLoaded", function (event) {

//disabled bottom sections upon load
    document.getElementById("section2").disabled = true;
    document.getElementById("section3").disabled = true;

//eventhandlers
    document.getElementById("section1Submit").addEventListener("click", function(){
        openAccess();
    });
    document.getElementById("section2Submit").addEventListener("click", function(){
        section2Submit();
    });
    document.getElementById("section3Submit").addEventListener("click", function(){
        section3Submit();
    });

//functions    
    function openAccess() {
        document.querySelector("#welcomeMsg").innerHTML = "";
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
           document.getElementById("section2").disabled = false;
           document.getElementById("section3").disabled = true;
        }
        else if (radioVal == 2) {
            document.getElementById("section3").disabled = false;
            document.getElementById("section2").disabled = true;
        }
    };

    function section2Submit() {
        var createUsername = document.getElementById("createUsername").value;
        var createPw = document.getElementById("createPw").value;
        var userCity = document.getElementById("userCity").value;
        var userState = document.getElementById("userState").value;

        //welcome message
        document.querySelector("#welcomeMsg").innerHTML = "Welcome " + createUsername + "!";

        //storage
        localStorage.setItem("username", createUsername);
        localStorage.setItem("password", createPw);
        localStorage.setItem("city", userCity);
        localStorage.setItem("state", userState);
    };

    function section3Submit() {
        var enterUsername = document.getElementById("enterUsername").value;
        var enterPw = document.getElementById("enterPw").value;

        //welcome and verified
        if (enterUsername == localStorage.getItem("username") && enterPw == localStorage.getItem("password")) {
            document.querySelector("#welcomeMsg").innerHTML = "Welcome back " + enterUsername + "!";
        }
        else {
            prompt("Invalid.");
        };
    };


});