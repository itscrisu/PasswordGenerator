const pwElement = document.getElementById("pw");
const copyElement = document.getElementById("copy");
const lenElement = document.getElementById("len");
const upperElement = document.getElementById("upper");
const lowerElement = document.getElementById("lower");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const generateElement = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=";

function containLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

};

function containUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];

};

function containNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];

};

function containSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];

};

function generatePass(){

    const len = lenElement.value;

    let password = '';

    for(let i=0; i<len; i++){
        const a = generateA();
        password += a;
    };

    pwElement.innerText = password;

};

function generateA(){

    const blist = [];

    if(upperElement.checked){
        blist.push(containUpperCase())
    };

    if(lowerElement.checked){
        blist.push(containLowerCase())
    };

    if(numberElement.checked){
        blist.push(containNumber())
    };

    if(symbolElement.checked){
        blist.push(containSymbol())
    };
    if (blist.length===0) {
        return "";
    }

    return blist[Math.floor(Math.random() * blist.length)];

};

generateElement.addEventListener('click', generatePass);

copyElement.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwElement.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard ;)");
});

