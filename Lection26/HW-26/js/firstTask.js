console.log('#9. JavaScript homework example file. First task');

/*
 * #1
 *
 * Задача: Відстежування кліку на кнопку та виведення повідомлення
 * Мета: Розробити функцію, яка призначає обробник події кліку на кнопку з певним ID і виводить у консоль заздалегідь визначене повідомлення при кожному кліку на кнопку.
 *
 * Вимоги:
 * 1. Функція має приймати два параметри:
 *    - buttonId (рядок) - ID кнопки, на яку потрібно встановити обробник події.
 *    - message (рядок) - повідомлення, яке буде виводитись у консоль при кліку на кнопку.
 * 2. Функція має знайти кнопку за допомогою buttonId і призначити їй обробник події кліку.
 * 3. При кліку на кнопку у консоль має виводитись задане message.
 * 4. Функція має бути експортована для подальшого використання і тестування.
 *
 */

function handleButtonClick(buttonId, message) {

  const myClick = document.getElementById(buttonId);
  myClick.addEventListener('click', () => {
    console.log(`ID: ${buttonId}, ${message}`);
  })

}

// Демонстрація використання функції (припустимо, що HTML містить кнопку з ID 'myButton')
handleButtonClick('myButton', 'Button clicked!');





// Експорт функції для використання та тестування
// export { handleButtonClick, trackMousePosition, setupEventDelegation }
