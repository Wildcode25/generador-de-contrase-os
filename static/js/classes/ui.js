import { CharGenerator } from "./charGenerator.js";

const lettersInput = document.getElementById('lettersLabel')
const symbolsInput = document.getElementById('symbolsLabel')
const capsInput = document.getElementById('capsLabel')
const numbersInput = document.getElementById('numbersLabel')
const lengthInput = document.getElementById('length')
const passwordContainer = document.querySelector('.password_content')

const letters = new CharGenerator([97, 122])
const symbols = new CharGenerator([33, 47])
const numbers = new CharGenerator([48, 57])
const capital = new CharGenerator([65, 90])

lettersInput.addEventListener("click",()=>{
    letters.setCheck()
    passwordContainer.innerHTML = generatePassword()

})
symbolsInput.addEventListener("click",()=>{
    symbols.setCheck()
    passwordContainer.innerHTML = generatePassword()
    
})
capsInput.addEventListener("click",()=>{
    capital.setCheck()
    passwordContainer.innerHTML = generatePassword()
    
})
numbersInput.addEventListener("click",()=>{
    numbers.setCheck()
    passwordContainer.innerHTML = generatePassword()
    
})
document.addEventListener("keyup",(e)=>{
    if(e.key==="Enter")passwordContainer.innerHTML = generatePassword()
    
})

function generatePassword(){
    let passwordArray=[];
    let password="";
    let i =0
    while(i<lengthInput.value){
        if(letters.isChecked){
            passwordArray.push(letters.getChar())
            i++
        }
        if(capital.isChecked){
            passwordArray.push(capital.getChar())
            i++
        }
        if(symbols.isChecked){
            passwordArray.push(symbols.getChar())
            i++
        }
        if(numbers.isChecked){
            passwordArray.push(numbers.getChar())
            i++
        }
        if(passwordArray.length==0) break;
    }
    shufflePassword(passwordArray)
    passwordArray.forEach((passwordChar)=>{
        password+=passwordChar
    })
    return password

}
function shufflePassword(password) {
    return password.sort(random);
  }

  function random() {
    return Math.random() - 0.5;
  }