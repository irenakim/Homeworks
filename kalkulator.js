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

function inputsValue() {
ekranIn.textContent ="";
    buttonsInput.forEach(button => {
        button.addEventListener("click", () => {
            ekranIn.textContent += button.textContent; 
        });
    });

    buttonsMathAction.forEach(actionButton => {
        actionButton.addEventListener("click", () => {
            if (actionButton.textContent !== "=") {
                values.push(Number(ekranIn.textContent));
                actions.push(actionButton.textContent);
                ekranIn.textContent = ""; 
                
            } else {
                
                values.push(Number(ekranIn.textContent)); 
                
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
                        case "CE":
                            result = 0;
                        
                    }
                }

                ekranIn.textContent = result; 

                values = [];
                actions = [];
                ekranIn = 0;
            }
        });
    });

    return result;
}

inputsValue();
