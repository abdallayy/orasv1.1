function dar() {//darck mode
document.getElementById("body").
style="background-color: rgb(47 58 63);";

document.getElementById("navebar").
style="box-shadow: 0px 7px 20px 0px white;background: #747b7e;";

document.getElementById("light").
style="display: block;";

document.getElementById("dark").
style='display: none;';

document.getElementById("list").
style='background: #ffffff54;';

//fix bug

document.getElementById("list").
 style="display: contents;width: 0px;height: 0px;";

document.getElementById("im"). 
style="display: none;";

document.getElementById("iconn"). 
style="display: none;";

}


function ligh() {//lighte mode
document.getElementById("list").
style='background: #7c7f81;';

document.getElementById("body").
style="background-color:rgba(16, 32, 39, 0.29);";

document.getElementById("navebar").
style="box-shadow: 0px 7px 20px 0px black;background:rgb(124 127 129);";

document.getElementById("light").
style="display: none;";

document.getElementById("dark").
style='display: block;';


//fix bug
document.getElementById("list").
style="display: contents;width: 0px;height: 0px;";

document.getElementById("im").
style="display: none;";

document.getElementById("iconn").
style="display: none;"; 

}




