let buttonsSmall = document.querySelectorAll(".small");
let buttonsBig = document.querySelectorAll(".big");
let buttonBigV = document.querySelectorAll(".bigV");
let buttonsAll = [...buttonsSmall, ...buttonsBig, ...buttonBigV];

let light = document.querySelector(".light");

function switchLight() {
    buttonsAll.forEach(button => {
        button.addEventListener("click", () => {
            light.classList.add("lightOn");
            setTimeout(()=>{
                light.classList.remove("lightOn");
            }, 100);
        });
    });
}

switchLight();

let buttonsInput = document.querySelectorAll(".input");
let buttonsMathAction = document.querySelectorAll(".action");
let ekranIn = document.querySelector(".monitorIntro");
let values = [];
let actions = [];
let result = 0;
let value = "";
let calculationComplete = false; 

function inputsValue() {
    result = 0;
    ekranIn.textContent = "";
    values = [];
    actions = [];
    value = "";

    buttonsInput.forEach(button => {
        button.addEventListener("click", () => {
            
           if (calculationComplete) {
                ekranIn.textContent = "";
                value = "";
                calculationComplete = false;
            }
            ekranIn.textContent += button.textContent; 
            value += button.textContent; 
        });
    });

    buttonsMathAction.forEach(actionButton => {
        actionButton.addEventListener("click", () => {
            if (actionButton.textContent === "CE") {
                
                values = [];
                actions = [];
                result = 0;
                value = "";
                ekranIn.textContent = "";
                return;
            }

            if (actionButton.textContent !== "=") {
                
                if (value !== "") {
                    values.push(Number(value));
                    value = ""; 
                }
                actions.push(actionButton.textContent);
                ekranIn.textContent += ` ${actionButton.textContent} `; 
            } else {
                
                if (value !== "") {
                    values.push(Number(value)); 
                }
                result = values[0];

                for (let i = 1; i < values.length; i++) {
                    let action = actions[i - 1];
                    switch (action) {
                        case "+":
                            result += values[i];
                            break;
                        case "-":
                            result -= values[i];
                            break;
                        case "×":
                            result *= values[i];
                            break;
                        case "/": 
                            result /= values[i];
                            break;
                        case "**":
                        result **= values[i];
                        break;
                        
                    }
                }

                ekranIn.textContent = result;

                value = "";
                values = [];
                actions = [];
                calculationComplete = true; 
            }
        });
    });

    return result;
}

inputsValue();

