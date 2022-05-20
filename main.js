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

function deleteTask(id) {
    tableTask.forEach(task => {
        if (task.id === id) {
           task.done = !task.done;
        }
    })
};



function showTableTask() {
    // console.log(tableTask);
    let html = '';
    tableTask.forEach(task => {
        if (task.done) {
            html += `<div>
            ${task.text}
            <button data-id='${task.id}'>готова</button>
            <button data-delId='${task.id}'>Удалить</button>
                    </div>`;

        }else {
            html += `<div>
            ${task.text}
            <button data-id='${task.id}'>не готова</button>
            <button data-delId='${task.id}'>Удалить</button>
                    </div>`;
        }
    })

    table.innerHTML = html;
};


function remove(id) {
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
        deleteTask(id);
    }else {
        let delId = event.target.dataset.delid;
        remove(delId)
    }

    showTableTask();


    // console.log(event.target.dataset);
})





showTableTask();
