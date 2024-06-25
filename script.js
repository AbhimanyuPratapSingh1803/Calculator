let result = document.querySelector(".result");
let cancel = document.querySelector(".cancel");
const title = document.querySelector(".title");
const buttons = document.querySelectorAll(".num");

function expression(val){
    if(!result.value){
        result.value = "";
    }
    result.value += val;
}

const dark = document.querySelector(".changeColor");
dark.addEventListener("click", changeTheme);
let theme = "light";
const doc = document.querySelector(".wrapper");

function changeTheme(){
    if(theme === "light"){
        buttons.forEach(button => {
            button.style.backgroundColor = "#E0FBE2";
        });
        document.querySelector(".input").style.backgroundColor = "#E0FBE2";
        result.style.backgroundColor = "#E0FBE2";
        doc.style.color = "black";
        title.style.color = "white";
        doc.style.backgroundColor = "#0F172A";
        theme = "dark";
        dark.src = `Assets/light.svg`;
    }
    else{
        buttons.forEach(button => {
            button.style.backgroundColor = "#0F172A";
        });
        document.querySelector(".input").style.backgroundColor = "#0F172A";
        result.style.backgroundColor = "#0F172A";
        doc.style.color = "white";
        title.style.color = "#0F172A";
        doc.style.backgroundColor = "#ACE1AF";
        theme = "light";
        dark.src = `Assets/moon.svg`;
    }
}

function calculate(exp){
    const ans = eval(exp);
    if(isNaN(ans)){
        result.value = "Can't divide by Zero";
        setTimeout(() => {
            result.value = ""
        }, 2000);
    }
    else{
        result.value = ans;
    }
}

document.addEventListener("keydown", keyboard);

function keyboard(e){
    e.preventDefault();
    if(e.key == "0"){
        result.value += "0";
    }
    if(e.key == "1"){
        result.value += "1";
    }
    if(e.key == "2"){
        result.value += "2";
    }
    if(e.key == "3"){
        result.value += "3";
    }
    if(e.key == "4"){
        result.value += "4";
    }
    if(e.key == "5"){
        result.value += "5";
    }
    if(e.key == "6"){
        result.value += "6";
    }
    if(e.key == "7"){
        result.value += "7";
    }
    if(e.key == "8"){
        result.value += "8";
    }
    if(e.key == "9"){
        result.value += "9";
    }
    if(e.key == "+"){
        result.value += "+";
    }
    if(e.key == "-"){
        result.value += "-";
    }
    if(e.key == "*"){
        result.value += "*";
    }
    if(e.key == "/"){
        result.value += "/";
    }
    if(e.key == "."){
        result.value += ".";
    }
    if(e.key === "Enter"){
        calculate(result.value);
    }

    if(e.key == "Backspace"){
        const res = result.value;
        result.value = res.substring(0, result.value.length-1);
    }
}