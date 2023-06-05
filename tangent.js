document.addEventListener('keydown', myFunk);

    function myFunk(){
       document.getElementById(event.code).style.backgroundColor = "navy";
    }

    document.addEventListener('keyup', myFunkUp);

    function myFunkUp(){
       document.getElementById(event.code).style.backgroundColor = "";
    }