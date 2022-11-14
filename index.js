var btn = document.getElementById('addTask');
function check(ip){
    if (ip !== ''){
        return true;
    } else{
        var errMsg = document.getElementById("errMsg");
        errMsg.classList.replace('unshow', 'show');
        return false;
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    var mainElt = document.createElement('div');
    mainElt.className = "taskItem";
    
    var list = document.querySelector("ol");
    var userTask = document.getElementById('taskText');
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerText = "x";
    
    var editBtn = document.createElement('button');
    editBtn.className = "editBtn";
    editBtn.innerText = "Edit";
    
    var newTask = document.createElement("li");

    if (check(userTask.value)){
        newTask.innerText = userTask.value;
        
        mainElt.appendChild(newTask);
        mainElt.appendChild(editBtn)
        mainElt.appendChild(deleteBtn);
        list.appendChild(mainElt);
        errMsg.classList.replace('show', 'unshow');
    }
    userTask.value = "";
    
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();    
        deleteBtn.parentElement.parentElement.removeChild(deleteBtn.parentElement);
    })

    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        var show = document.getElementById("editBox");
        var unshow = document.getElementById("ipBox");
    
        unshow.classList.replace("show", "unshow");
        show.classList.replace("unshow", "show");
        var whichTask = editBtn.parentElement.firstChild;
        
        var editBox = document.getElementById("editTask");
        editBox.value = whichTask.innerText;
        
        var saveBtn = document.getElementById('save');
        
        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (check(editBox.value)){
                whichTask.innerText = editBox.value;
                whichTask = '';
                unshow.classList.replace("unshow", "show");
                show.classList.replace("show", "unshow");
                errMsg.classList.replace('show', 'unshow');
            }
        })
    })
})




