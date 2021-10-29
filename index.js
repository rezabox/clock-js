function showDate(){
    let date= new Date ();
    let h= date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();
    
    let time= `${h}:${m}:${s}`;
    document.getElementById('myclock').innerHTML = time;
    setTimeout(showDate,1000);
}
showDate();


