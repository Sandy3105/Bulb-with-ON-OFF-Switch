const text = document.getElementById('btn');
const bulb = document.getElementById('bulb');


function clickFun(){
    if (text.innerText=='ON') {
        text.innerText='OFF';
        bulb.src="onBulb.png";
    }else{
        text.innerText='ON';
        bulb.src="offBulb.jpg";
    }
}

