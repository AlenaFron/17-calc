// --- ЛОГИКА КАЛЬКУЛЯТОРА ---
function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = 'Введите числа!';
        return;
    }

    let res;
    switch (operator) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': 
            res = num2 !== 0 ? num1 / num2 : 'Ошибка (на 0 нельзя)'; 
            break;
    }
    resultElement.innerText = res;
}


// --- ЛОГИКА TODO LIST (исходная) ---
const ToDoList = {
    add(title, priority) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        this.tasks.push({ title, id, priority });
    },
    remove(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    update(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            if (updates.title) task.title = updates.title;
            if (updates.priority !== undefined) task.priority = updates.priority;
        }
    },
    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
};

const newTask = {
    tasks: [{ 
        id: 1, 
        title: 'тест', 
        description: 'описание',
        priority: 0
    }]
};

// Применение методов через .call
ToDoList.add.call(newTask, 'Купить продукты', 2);
ToDoList.add.call(newTask, 'Помыть машину', 1);
ToDoList.update.call(newTask, 1, { title: 'Обновленный тест', priority: 5 });
ToDoList.sortByPriority.call(newTask);
ToDoList.remove.call(newTask, 2);

console.log('Результат ToDo:', newTask.tasks);