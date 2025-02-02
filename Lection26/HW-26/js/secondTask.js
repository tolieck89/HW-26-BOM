console.log('#9. JavaScript homework example file. Second task');
/*
 * #2
 *
 * Задача: Розробка функції відстеження позиції курсору миші
 * Мета: Створити функцію trackMousePosition, яка встановлює обробник події для відстеження руху миші по документу та виводить в консоль координати курсору миші (X та Y).
 *
 * Вимоги до реалізації:
 * 1. Функціональність: Функція має відслідковувати рух миші по документу. При кожному русі миші функція має виводити в консоль координати clientX та clientY, які представляють позицію курсору відносно вікна переглядача.
 * 2. Реєстрація обробника події: Функція має використовувати document.addEventListener для реєстрації обробника події mousemove.
 * 3. Вивід даних: При спрацьовуванні події mousemove, функція має виводити рядок у форматі `"Mouse X: [X], Mouse Y: [Y]"`, де `[X]` та `[Y]` - це відповідні координати курсору миші.
 *
 */

function trackMousePosition() {
    const myEvent = document.querySelector('.main');
    myEvent.addEventListener('mousemove', (event) => {
         console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    });
  
  }
  
  console.log(trackMousePosition());