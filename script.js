
const onOffBtn = document.getElementById('onOff')
const bulb = document.getElementById('bulb')
const flament = document.getElementById('flament')

onOffBtn.addEventListener('click',()=>{

    if(onOffBtn.textContent.toLowerCase() === 'on'){
        document.body.style.backgroundColor= "black";
        onOffBtn.style.backgroundColor='black';
        onOffBtn.style.border='1px solid white';
        onOffBtn.innerText='OFF';
        onOffBtn.style.color='white';
        bulb.style.backgroundColor = "rgb(253, 231, 184)";
        flament.style.color="rgb(248, 220, 161)"
        bulb.style.boxShadow = '0px 0px 320px 125px  rgb(251, 195, 73)';

    }else if(onOffBtn.textContent.toLowerCase() === 'off')
    {
        onOffBtn.innerText= "ON";
        document.body.style.backgroundColor= "white";
        onOffBtn.style.backgroundColor='auto';
        onOffBtn.style.color='white';
        bulb.style.boxShadow="none";
        bulb.style.backgroundColor="rgb(249, 245, 245)";
        bulb.style.boxShadow="0 6px 2px 1px rgb(84, 84, 84)";

    }
    

})

