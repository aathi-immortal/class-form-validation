

let submit_button = document.getElementById("submit");
let formsection = document.getElementById("form");
let namesection = document.getElementById("name");
let emailsection = document.getElementById("email");
console.log("hhu");
submit_button.addEventListener("click",()=>
{
    if(validFrom())
    {
        console.log("success");
        return
    }
    console.log("sorry");
});






function validFrom()
{
    if( !checkNamefield())
        return false;
    // else if(!checkEmailField())
    //     return false;
    // else if(!checkPasswordField())
    //     return false;
    return true;
}

function checkEmailField()
{
    let name = namesection.innerHTML.trim();
    // if(name.length != 0 && typeof name.charAt(0) != Number)
    // {
    //     return true;
    // }
    // return false;
    
}