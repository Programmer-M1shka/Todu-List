const inputbox = document.getElementById('input-box');
const listcon = document.getElementById('listcon');


function add(){
    if (inputbox.value === ''){
        alert('WRONG COMMAND')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "<i class='bx bx-message-square-x' ></i>";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcon.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("correct");
        saveData();
    } 
    else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveData();
    }
});






function saveData(){
    localStorage.setItem("data",listcon.innerHTML);
}
function  Task(){
listcon.innerHTML = localStorage.getItem("data");
}
Task();