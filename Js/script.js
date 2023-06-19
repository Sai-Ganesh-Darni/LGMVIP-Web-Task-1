let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("inputBox");

function addTask()
{
    let li = document.createElement("li");
    if(inputBox.value=="")
    {
        alert("Enter Something");
    }
    else{
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
