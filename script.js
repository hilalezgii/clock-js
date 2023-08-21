let userName = prompt("lütfen isminizi girin:")
console.log(userName)

let myName = document.querySelector("#myName")
myName.innerHTML=`${myName.innerHTML}${userName}`

window.onload = function() {
    // showTime fonksiyonunu çağırarak saat gösterimini başlat
    showTime();
};
function showTime(){
    const day = new Date();
    let hour=day.getHours();
    let minute=day.getMinutes();
    let second=day.getSeconds();

    minute=checkTime(minute);
    second=checkTime(second);
    document.getElementById('myClock').innerHTML=hour+":"+ minute+":"+second;
    setTimeout(showTime,1000);
}
function checkTime(i) {
    if(i<10){
        i="0" + i;
    }
    return i;
}

