var time=new Date().getHours();
if(6<=time && time<=12)
{
  alert("Sabahiniz xeyir");
  document.body.style.backgroundColor ="#a55656"
}
else if(12<time && time<=18){
    alert("Gunortaniz xeyir");
    document.body.style.backgroundColor ="#54AEFF";
}
else if(18<time && time<=23){
    alert("Axsaminiz xeyir");
    document.body.style.backgroundColor ="#2C974B";
}
if(0<=time && time<6 || time===24){
    alert("Geceniz xeyire");
    document.body.style.backgroundColor ="#212025";
}
