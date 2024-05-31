if(typeof document!=='undefined'){
var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("RegForm");
       function register(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        IndicatorForm.style.transform = "translateX(100px)";
       }
       function login(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        IndicatorForm.style.transform = "translateX(0px)";
       }
    }