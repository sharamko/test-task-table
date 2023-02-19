## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Враховуючи розмір та складність додатку методи оптимізації є малоефективними, але все ж для оптимизації використано:
-lazy loading для модального вікна та контенту в ньому, так як вони не відображаються спочатку та без взаємодії з додатком
-useEffect для отримання даних з jsonplaceholder
-useMemo для зберігання результату сортування масиву з користувачами

Так як я раніше не працював із styled components був витрачений додатковий час час на ознайомлення та використання його в проєкті.

Нижче представлений орієнтовний час, який я витратив на написання коду.

Покроковий список задач для написання додатку:

1. Встановлення залежностей та розмітка, стилізація головної сторінки - 60хв
2. Написання логіки відображення таблиці за вхідними даними та стилізація таблиці - 120хв
3. Відображення модального вікна та контента з вибором колонок в ньому, стилізація - 60хв
4. Фільтрація доступних колонок по введеному запиту - 30хв
5. Додавання та видалення колонок в полях Вибрані та Доступні, стилізація - 120хв
6. DnD логіка - 30хв
7. Відображення тільки обраних колонок після натискування кнопки Apply - 60хв
8. Сортування таблиці за колонками - 60хв
9. Оптимізація та рефакторинг - 120хв
10. Написання тестів - 60хв
