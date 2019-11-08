class calculator{
    constructor(x,y){
this.firstt=x;
this.secondt=y;

this.operation;

this.firstv;
this.secondv;

this.last;

    }
datafunction(){
cal.last="number";
let number=event.target.innerText;

if(number=="." && cal.secondt.innerText.includes("."))
       return

if(cal.firstv==undefined){//first time we enter number
cal.secondt.innerText=cal.secondt.innerText+number;
console.log("data.. 1");

return;
}
if (cal.firstv!=undefined){ //second time we enter number
cal.secondt.innerText=cal.secondt.innerText+number;
cal.secondv=cal.secondt.innerText;
console.log("data..2 ");

}


}

opfunction(){
   let  op=event.target.innerText;
    if(cal.last=="op" ){
        console.log("error")
        return;
    
}
    cal.last="op";
    if(cal.firstt.innerText=="" && cal.secondt.innerText!=""){
        console.log("First");
    cal.operation=op;
cal.firstv=cal.secondt.innerText;
    cal.firstt.innerText=cal.secondt.innerText+cal.operation;
    cal.secondt.innerText="";
    return;
}
if(cal.firstv!=undefined && cal.secondv!=undefined){
    
    console.log("last time");
if(cal.operation=="+"){
    cal.firstv=Number(cal.firstv)+Number(cal.secondv);

    cal.firstt.innerText=cal.firstv+op;
   
    cal.operation=op;
    cal.secondt.innerText="";
    cal.secondv=undefined;
    returnl
}

if(cal.operation=="-"){
    
    cal.firstv=Number(cal.firstv)-Number(cal.secondv);
    cal.firstt.innerText=cal.firstv+op;
    cal.operation=op;
    cal.secondt.innerText="";
    cal.secondv=undefined;
    return
}

if(cal.operation=="÷"){
    
    cal.firstv=Number(cal.firstv)/Number(cal.secondv);
    cal.firstt.innerText=cal.firstv+op;
    cal.operation=op;
    cal.secondt.innerText="";
    cal.secondv=undefined;
    return
}

if(cal.operation=="x"){
    
    cal.firstv=Number(cal.firstv)*Number(cal.secondv);
    cal.firstt.innerText=cal.firstv+op;
    cal.operation=op;
    cal.secondt.innerText="";
    cal.secondv=undefined;
    return
}
}
else{
    cal.firstt.innerText=cal.firstv+cal.operation;
    console.log("new");
}



 
    


}


}//closing calculator class
    



const first=document.getElementById('first');
const second=document.getElementById('second');
const op= document.querySelectorAll('[op]');
const data=document.querySelectorAll('[data]');
const clear=document.querySelector('[clear]');
const del=document.querySelector('[del]');
const equal=document.querySelector('[equal]');

 let cal =new calculator(first,second);

op.forEach(item=>{
item.addEventListener('click',cal.opfunction);

});


data.forEach(item =>{
item.addEventListener('click',cal.datafunction);
});

clear.addEventListener('click',()=>{
    first.innerText="";
    second.innerText="";
    cal.secondv=undefined;
    cal.firstv=undefined;
    cal.operation=undefined;
    cal.last=undefined;
    });

    del.addEventListener('click',()=>{

        if(second.innerText=="" && first.innerText=="")
        return;
        if(second.innerText=="")
    return;        
        else{
        second.innerText=second.innerText.substring(0,second.innerText.length - 1);
        cal.secondv=cal.secondv.substring(0,cal.secondv.length - 1);

        }   
    });

    equal.addEventListener('click',()=>{
        if(cal.last=="equal")
        return;
        cal.last="equal";
if(cal.firstv!=undefined && cal.secondv!=undefined){
console.log("equal working");

cal.firstt.innerText="";

if(cal.operation=="+"){
	
    cal.secondt.innerText=Number(cal.firstv)+Number(cal.secondv);
       cal.firstv=Number(cal.firstv)+Number(cal.secondv);
       cal.secondv=undefined;
    return;

}

if(cal.operation=="-"){
    
    cal.secondt.innerText=Number(cal.firstv)-Number(cal.secondv);
    cal.firstv=Number(cal.firstv)-Number(cal.secondv);
    cal.secondv=undefined;
    return;

}

if(cal.operation=="x"){
    
    cal.secondt.innerText=Number(cal.firstv)*Number(cal.secondv);
    cal.firstv=Number(cal.firstv)*Number(cal.secondv);
    cal.secondv=undefined;
    return;


}

if(cal.operation=="÷"){
    
    cal.secondt.innerText=Number(cal.firstv)/Number(cal.secondv);
    cal.firstv=Number(cal.firstv)/Number(cal.secondv);
    cal.secondv=undefined;
    return;

}


}
        
    });