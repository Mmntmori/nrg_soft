Моя реализация тестового задания на должность frontend developer в компанию NRG-SOFT

Исходные данные:

# Тестовое задание. Список постов.

## Описание
Требуется реализовать приложение загрузки случайных постов с помощью Reddit API.

## Задача

Всего есть 4 темы (subreddits):
- frontend
- reactjs
- vuejs
- angular

Для каждой из них есть кнопка с название темы.

При клике на кнопку происходит запрос на сервер статей по данной теме.
Затем в список добавляется один случайный пост.

Элемент списка содержит:
- иконку like (меняется при клике)
- иконку remove (удаляет пост)
- ссылку на пост

Дополнительные пункты. Выберете _один или несколько_:
- состояние приложения _должно восстанавливаться после перезагрузки страницы_. - Сделано
- добавить в список статей возможность drag and drop чтобы была возможность их сортировать
- API запросы должны кэшироваться. Кэш считается валидным в течение 2 минут для каждой темы или после перезагрузки страницы
- анимация кнопок (см. пример ниже) - Сделано
- реализовать виртуальный скроллинг списка. Для рендера только той части которая реально отображается в списке.
- реализовать функциональность undo/redo

_(Как минимум должен быть выбран один любой дополнительный пункт или если у вас будет желание можете выбрать несколько. Мы предоставляем вам варианты чтобы разнообразить задание. Кроме того, мы оцениваем сложность выбранных заданий и ваш вариант их решений.)_

### Пример (gif 14mb)

![alt gif_ex](https://raw.githubusercontent.com/dsvgit/redux-test-middle/master/demo-middle.gif)

_Обратите внимание: анимация кнопок - одно из дополнительных заданий и не является обязательным_

## Требования
1. Приложение должно быть выполнено с использованием одной из следующих библиотек: React, Angular, Vue
1. Разверните приложние в сети интернет любым удобным способом.
1. Предоставьте доступ к исходному коду приложения.

## Дополнительно
- API можно посмотреть тут - https://codesandbox.io/s/72j28q2k50
- Дизайн может быть взят из примера или разработан свой
- Для решения задач могут быть использованы соответствующие библиотеки. В том числе библиотеки стейт мененджмента, например redux, redux-saga или любые другие.

## Оценка
Оценивается
- структура компонентов
- логика изменения состояния компонентов/приложения
- эффективность выбранных решений
- качество кода


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
