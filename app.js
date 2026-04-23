function calculate(operator) {
    // Получаем значения из полей и преобразуем в числа
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultField = document.getElementById('result');

    // Проверка на корректность ввода
    if (isNaN(n1) || isNaN(n2)) {
        resultField.value = "Введите числа!";
        return;
    }

    let res;
    switch (operator) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': 
            res = n2 !== 0 ? n1 / n2 : "На 0 нельзя!"; 
            break;
    }

    // Выводим результат
    resultField.value = res;
}