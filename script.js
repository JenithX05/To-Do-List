const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You have to write something!');
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // clear input field after adding
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
        saveData();
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
