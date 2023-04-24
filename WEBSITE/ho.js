const divcontainer=document.getElementById("element");
let isclicked=true;
let home=function(){
if(isclicked){
divcontainer.style.display="block";
isclicked=false;
}
else{
divcontainer.style.display="none";
isclicked=true;
}}



