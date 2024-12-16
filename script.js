document.getElementById("bt1").onclick=function(){
    if(confirm()){
        document.getElementById("txt1").value="Поставьте автомат (пожалуйста)";
        document.getElementById("cb1").checked=true;
    }
    else document.getElementById("form1").reset();
}

 document.getElementById("bt2").onclick=function() { 
document.getElementById("txt2").disabled=true;
 }   

document.getElementById("bt3").onclick=function()  {
    document.getElementById("txt2").disabled=false;
}

let elems=document.querySelectorAll("input[type=text2]")   
for (let i=0;i<elems.length;i++){
    elems[i].onmouseover=function(){
        elems[i].focus();
        elems[i].value=elems[i].type;
    }
    elems[i].onmouseout=function(){
        elems[i].blur();
        elems[i].value="";
    }
}

let checks=document.querySelectorAll("input[type=checkbox]");
for (let j=0; j<checks.length;j++){
    checks[j].onclick=function(){
        checks[j].nextElementSibling.hidden=!checks[j].checked;
    }
}