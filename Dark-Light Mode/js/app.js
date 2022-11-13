function Mode(){ 
    var button=document.getElementById('btn'); 
    if( document.body.style.backgroundColor==="black"){
        document.body.style.backgroundColor="white"; 
        document.getElementById("textname").style.color="black";
        document.getElementById("text1").style.color="black";
        document.getElementById("text2").style.color="black";
        button.innerHTML= 'Dark Mode'
        button.style.backgroundColor='black'
        button.style.color='white'        
    }
    else{
        document.body.style.backgroundColor="black";
        document.getElementById("textname").style.color="blue";
        document.getElementById("text1").style.color="blue";
        document.getElementById("text2").style.color="blue"; 
        button.innerHTML= 'Light Mode'
        button.style.backgroundColor='white'
        button.style.color='black'  
    }
}