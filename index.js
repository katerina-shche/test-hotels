console.log('Тестовое задание, выполненное на JavaScript.');
//Задача 1 - Склонение слова "компьютер" (20 минут)
function nComputers(n) {
    if (typeof n !== 'number') {
        console.log('N должно быть числом');
        return;
        }
    const item = 'компьютер';    
    let ending = '';
    const number = n.toString();
    const lastTwoNumbers = number.slice(-2);
    const lastNumber = number.charAt(number.length - 1);
    
    if ( Number(lastTwoNumbers) >= 10 && Number(lastTwoNumbers) <= 20 ) {
        ending = 'ов';
    } else if (lastNumber === '1') {
        ending = '';
    } else if (Number(lastNumber) >= 2 && Number(lastNumber) <= 4) {
        ending = 'а';
    } else if ( lastNumber === '0' || (Number(lastNumber) >= 5 && Number(lastNumber) <= 9)) {
        ending = 'ов';
    } else {
        console.log('Unnknown case');
    }
  return `${n} ${item}${ending}`;
}
//Задача 4 - Таблица умножения (28 минут: алгоритм был понятен сразу, но заняло время разобраться с индексацией таблицы и перейти от объекта с масивами к объекту с объектами)
function multiplicationTable(n) {
    console.log(`Таблица умножения до ${n}x${n}:`);
    
    let tableObj = {};
    // Тело таблицы
    for (let i = 1; i <= n; i++) {
        let row = {}  // Начало строки с текущим числом
        for (let j = 1; j <= n; j++) {
            row[j] = i * j;  
        }
        tableObj[i] = row;
    }
    console.table(tableObj);
}

// Задача 2 - Общие делители (23 минуты)
function findCommonDivisors(arr) {
    // Функция для поиска делителей числа
    function getDivisors(num) {
        const divisors = [];
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }
    // Начальное значение - делители первого числа в массиве
    let commonDivisors = getDivisors(arr[0]);

    // Перебираем остальные числа в массиве
    for (let i = 1; i < arr.length; i++) {
        const currentDivisors = getDivisors(arr[i]);
        // фильтруем общие делители, оставляем только те, которые есть у предыдущего числа
        commonDivisors = commonDivisors.filter(divisor => currentDivisors.includes(divisor));
    }

    return commonDivisors;
}


// задача 3 - Поиск простых чисел в диапазоне (30 минут)
function getPrimesInRange(min, max) {
    const primes = [];

    for (let num = min; num <= max; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Пример использования

console.log("Задача№1: склонение слова 'компьютер'");  
console.log(nComputers(0));
console.log(nComputers(1));
console.log(nComputers(2));
console.log(nComputers(3));
console.log(nComputers(4));
console.log(nComputers(5));
console.log(nComputers(6));
console.log(nComputers(7));
console.log(nComputers(8));
console.log(nComputers(9));
console.log(nComputers(10));
console.log(nComputers(11));
console.log(nComputers(12));
console.log(nComputers(13));
console.log(nComputers(14));
console.log(nComputers(15));
console.log(nComputers(16));
console.log(nComputers(17));
console.log(nComputers(18));
console.log(nComputers(19));
console.log(nComputers(20));
console.log(nComputers(21));
console.log(nComputers(22));
console.log(nComputers(23));
console.log(nComputers(24));
console.log(nComputers(25));
console.log(nComputers(26));
console.log(nComputers(27));
console.log(nComputers(28));
console.log(nComputers(29));
console.log(nComputers(30));
console.log(nComputers(31));
console.log(nComputers(1048));
console.log(nComputers("100"));

console.log("Задача№2: общие делители", findCommonDivisors([42, 12, 18])); 

console.log("Задача№3 Простые числа в итнервале min-max", getPrimesInRange(11, 20)); 

console.log("Задача№4: таблица умножения");
multiplicationTable(7);  // Вывод таблицы умножения до 7x7




