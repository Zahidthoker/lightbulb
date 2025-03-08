
const onOffBtn = document.getElementById('onOff')
const bulb = document.getElementById('bulb')

onOffBtn.addEventListener('click',()=>{

    if(onOffBtn.textContent.toLowerCase() === 'on'){
        document.body.style.backgroundColor= "black";
        onOffBtn.style.backgroundColor='black';
        onOffBtn.style.border='1px solid white';
        onOffBtn.innerText='Off';
        onOffBtn.style.color='white';

        bulb.style.boxShadow = '0px 0px 320px 125px  rgb(255, 174, 0)';

    }else
    {
        onOffBtn.innerText = "ON";
    }
    

})

