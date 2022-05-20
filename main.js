const table = document.querySelector('.TaskTable');
const inputTask = document.querySelector('.TaskInput');
const btnTask = document.querySelector('.btnAddTask');



let tableTask = [];



function addTask(text) {
    const task = {
        text,
        done: false,
        id: `${Math.random()}`
    };

    tableTask.push(task);
};

function changeId(id) {
    tableTask.forEach(task => {
        if (task.id === id) {
           task.done = !task.done;
        }
    })
};



function showTableTask() {
    let html = '';
    tableTask.forEach(task => {
            html += `<div>
            ${task.text}
            <button data-id='${task.id}'>${task.done? "готово": "не готово"}</button>
            <button data-delId='${task.id}'>Удалить</button>
                    </div>`;
    })

    table.innerHTML = html;
};


function removeTask(id) {
    tableTask = tableTask.filter(task => task.id !== id);
    
};


btnTask.addEventListener('click', () =>{
    const text = inputTask.value;

    addTask(text);

    showTableTask();
});



table.addEventListener('click', (event)=> {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    const id = event.target.dataset.id;
    if (!!id) {
        changeId(id);
    }else {
        let delId = event.target.dataset.delid;
        removeTask(delId)
    }

    showTableTask();

})



showTableTask();
