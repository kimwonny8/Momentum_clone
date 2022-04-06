const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //문자열로 바꿀때 String으로 감싸기!
    //padStart(숫자,"문자") => 숫자이상의 길이가 아닐때 앞에 문자추가
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); //실행하자마자 보이게하기 위함(원래는 1초후에 보여줌)
setInterval(getClock, 1000); //실시간으로 변화 보여줌(ms단위)