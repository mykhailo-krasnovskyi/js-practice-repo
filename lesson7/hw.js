// Extra LMS task #2 

function* fibonacciGenerator() {
    let a = 0, b = 1; // Крок 1: Ініціалізуємо дві змінні, a = 0 (перше число Фібоначчі) і b = 1 (друге число Фібоначчі).
    while (true) { // Крок 2: Входимо у нескінченний цикл, щоб постійно генерувати числа Фібоначчі.
        yield a; // Крок 3: Повертаємо поточне значення `a` (поточне число Фібоначчі) та тимчасово зупиняємо виконання функції.
        let temp = a; // Крок 4: Зберігаємо поточне значення `a` у змінній `temp`.
        a = b; // Крок 5: Оновлюємо `a`, присвоюючи їй значення `b` (наступне число в послідовності).
        b = temp + b; // Крок 6: Оновлюємо `b`, додаючи попереднє значення `a` (збережене у `temp`) до поточного значення `b`.
    }
}

const fib = fibonacciGenerator();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());