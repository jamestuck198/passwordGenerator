const pw = document.getElementById("pw");

function generate() {

    const length = Math.floor(Math.random() * 4) + 9;
    let password ="";
    let capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let alphabet = capitalLetters.toString().toLowerCase().split("");
    let special="!£$*@".split("");
    let capital = false;
    let lowerCase = false;
    let specialCharacter = false;
    let nextChar;
    let num;


    for (let i = 0; i < length-2; i++) {
        num = Math.random()
        if(num<0.3){
            password += capitalLetters[Math.floor(Math.random()*25)];
            capital=true;
        }
        else if(num>=0.3&&num<0.6){
            password+=special[Math.floor(Math.random()*4)];
            specialCharacter=true;
        }
        else{
            password+=alphabet[Math.floor(Math.random()*25)];
            lowerCase=true;
        }

    }
    if(!capital||!specialCharacter||!lowerCase){
        if (!capital){
            password+= capitalLetters[Math.floor(Math.random()*25)];
        }
        if(!specialCharacter){
            password+=special[Math.floor(Math.random()*4)];
        }
        if(!lowerCase){
            password+=alphabet[Math.floor(Math.random()*25)];
        }
    }
    else{
        password+=alphabet[Math.floor(Math.random()*25)];
    }

    pw.innerHTML = password;

}

generate();
