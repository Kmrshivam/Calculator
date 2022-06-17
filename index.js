let screen = document.getElementById('screen');             // screen input tag ha
buttons = document.querySelectorAll('button');
let screenValue = '';                                      // screenValue string ha
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText =='C'){         // C pr click kre toh pura screen clear hojayega
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);            // eval() ye ek functio ha aur yeh screenValue ko evaluate karega
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}