const registerBtn=document.querySelector(".registerBtn");
const requestBtn=document.querySelector(".requestBtn");
const moveBtn=document.querySelector(".moveBtn");
const register=document.querySelector(".register");
const request=document.querySelector(".request");

requestBtn.addEventListener("click", ()=>{
    moveBtn.classList.add("rightBtn");
    request.classList.add("requestform");
    register.classList.remove("registerform");
    moveBtn.innerHTML="Trainer Slot";
})

registerBtn.addEventListener("click", ()=>{
    moveBtn.classList.remove("rightBtn");
    request.classList.remove("requestform");
    register.classList.add("registerform");
    moveBtn.innerHTML="Student Slot";
})

function booked(){
    // return true;
    alert("Your seat is booked. \n Wait For your mail.");
}

function apply(){
    confirm("Are you sure you want to Submit ?");
    // return false;
    
}