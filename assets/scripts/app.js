const submitBtn = document.getElementById('submit');
const h1 = document.getElementById('result');
// Converts letter into number using phone number keypad
function convertLetter(letter){
    let newLetter = letter.toLowerCase();
    if(newLetter === 'a' || newLetter === 'b' || newLetter === 'c'){
        return 2;
    } else if(newLetter === 'd' || newLetter === 'e' || newLetter === 'f'){
        return 3;
    } else if(newLetter === 'g' || newLetter === 'h' || newLetter === 'i'){
        return 4;
    } else if(newLetter === 'j' || newLetter === 'k' || newLetter==='l'){
        return 5;
    } else if(newLetter === 'm' || newLetter === 'n' || newLetter === 'o'){
        return 6;
    } else if(newLetter === 'p' || newLetter === 'q' || newLetter === 'r' || newLetter === 's'){
        return 7;
    } else if(newLetter === 't' || newLetter === 'u' || newLetter === 'v'){
        return 8;
    } else if(newLetter === 'w' || newLetter === 'x' || newLetter === 'y' || newLetter === 'z'){
        return 9;
    } else{
        return '.';
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const inputValue = document.getElementById('number').value;
    let phoneNumLetter = inputValue.split('');
    let phoneNumberArr = [];
    let firstNum = phoneNumLetter.shift();
    let secondNum = phoneNumLetter.shift();
    let thirdNum = phoneNumLetter.shift();
    let phoneNumber = firstNum + secondNum + thirdNum;
    for(const letter of phoneNumLetter){
        let noose = convertLetter(letter);
        phoneNumberArr.push(noose);
    }
    for(const number of phoneNumberArr){
        phoneNumber += number;
    }
    h1.textContent = phoneNumber;
})