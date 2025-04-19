const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You gotta write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        li.onclick = function() {
            const editText = prompt("Edit your task:", li.textContent);
            if (editText !== null && editText !== "") {
                li.childNodes[0].textContent = editText;
            }
        };

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Delete button
        span.onclick = function(e) {
            e.stopPropagation();
            li.remove();
            saveData();
        };

        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
    document.querySelectorAll('#list-container li').forEach(li => {
        li.onclick = function() {
            const editText = prompt("Edit your task:", li.childNodes[0].textContent);
            if (editText !== null && editText !== "") {
                li.childNodes[0].textContent = editText;
            }
        };

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Delete button
        span.onclick = function(e) {
            e.stopPropagation();
            li.remove();
            saveData();
        };
        li.appendChild(span);
    });
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorDisplay = document.getElementById("login-error");

    // Simple hardcoded credentials for demonstration
    if (username === "user" && password === "password") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
        showTask();
    } else {
        errorDisplay.textContent = "Invalid username or password!";
    }
}

function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listContainer.innerHTML = ''; // Clear the list
        saveData(); // Save the empty state to local storage
    }
}

showTask();
