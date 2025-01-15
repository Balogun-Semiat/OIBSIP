const temperatureInput = document.getElementById('temperatureInput');
const type = document.getElementById('type');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const option = document.getElementById('option');
const caution = document.getElementById('caution');

let temperature;
let calc;

convertBtn.addEventListener('click', function(){
    temperature = Number(temperatureInput.value);
    console.log(temperature)
    console.log(option.value)
    if(temperature === 0 || ''){
        result.innerText = 'No temperature is entered';
        result.style.color = 'red';
        
    } else if(option.value === 'Farenheit'){
       calc =  5/9 * (temperature - 32)
       console.log(calc)
       result.innerText = calc + 'degC'
       result.style.color = 'black';

    } else if(option.value === 'Celsius'){
       calc =  (temperature * 9/5) + 32
       console.log(calc)
       result.innerText = calc + 'degF'
       result.style.color = 'black';
    }
})

