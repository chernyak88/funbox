Тестовое задание funbox Level 2

https://chernyak88.github.io/funbox/


## Level 1 (Теория)

### `1.	Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения: пользователя, менеджера проекта, дизайнера, верстальщика, клиентского программиста, серверного программиста` 

Для пользователя важна адаптивность – на любом устройстве сайт должен отображаться корректно, текст удобочитаемый, интерактивные элементы ведут себя адекватно, как при клике мышью, так и на touch-устройствах.<br>
Отсюда также вытекает необходимость кроссбраузерности – отображение сайта должно быть максимально одинаковым в различных браузерах.<br>
И, конечно, для пользователя важно быстродействие – ждать открытия страницы по несколько секунд мало кто захочет, даже если это нестабильное 3G-соединение.<br><br>

Менеджеру проектов важно, чтобы верстка по всем параметрам соответствовала ожиданиям клиента.  Для этого менеджеру, как связующему звену между клиентом и программистами, необходимо четко формулировать требования заказчика.<br><br>

Дизайнер будет оценивать качество верстки с точки зрения соответствия макету (Pixel Perfect, UI/UX дизайн, правильная реализация различных состояний интерактивных элементов).<br><br>

Верстальщик должен предусмотреть удобство использования сайта (оптимизация, кроссбраузерность, адаптивность), масштабируемость (в случае дальнейшего расширения функционала), удобство внесения изменений (использование БЭМ, препроцессоров, сборщиков проекта). В противном случае сайт будет непривлекательным с точки зрения пользователей.<br><br>

С точки зрения клиентского программиста сайт не должен быть трудно поддерживаемым. Можно быстро разобраться в структуре и возможно переиспользовать компоненты без опасения сломать верстку, гибкость блоков, предназначенных для контента и т.д.<br><br>

Для серверного программиста важна производительность, следовательно, верстка и скрипты должны быть максимально оптимизированными с точки зрения быстродействия и взаимодействия с сервером и базами данных.<br><br>

### `2.	Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.` 

В больших проектах изначально важна командная работа. Должны быть правила/стандарты, которым будут следовать и дизайнеры, и верстальщики. В современных проектах проще создавать хорошую масштабируемость проекта, используя различные фреймворки и компонентный подход. Это минимизирует трудозатраты при внесении изменений как в отдельный фрагмент кода, так и глобально на сайт.<br>
Мне на текущей работе приходится работать со старым проектом, по большей части построенным на JS, Jquery и иногда Vue.js. В своих личных проектах использовал такие инструменты как webpack, pug, SCSS, БЭМ.<br><br>

### `3.	Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.` 

Для адаптивности нужно использовать мета тег viewport и медиа запросы CSS. Размеры элементов не должны быть захардкожены, а иметь относительные единицы измерения. При изначально хорошей верстке адаптивность делается с минимальным внесением изменений в стили. На практике использовал всё вышеперечисленное, результаты проверял в DevTools браузеров, после вливания на прод уже на реальных устройствах. Поддержка требовалась для ранних версий Android и iOS. Как пример, адаптив для ипотечного калькулятора <a href="https://zettains.ru/calculators/ipoteka/" target="_blank">https://zettains.ru/calculators/ipoteka/</a><br><br>

### `4.	Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.` 

Работаю в редакторе Visual Studio Code с дополнительно установленными расширениями (auto rename tag, image preview, tag wrapper и т.д.). В качестве инструмента сборки и автоматизации webpack. Dev Tools для отладки кода, менеджеры пакетов npm и yarn. Всё это в совокупности позволяет экономить время при создании/редактировании проекта.<br><br>

### `5.	Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?` 

Воспользуюсь консолью разработчика для выяснения причины, на практике такое происходит не редко. Например, на старых версиях Android разваливалась верстка страницы, построенной на grid, пришлось переделывать на flex.<br><br>

### `6.	Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?` 

Если задача несрочная, обращусь к дизайнеру с просьбой доделать макет. Если срочная, реализую на своё усмотрение, затем обращусь к дизайнеру.<br><br>

### `7.	Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?` 

Смотрю обучающие видео на сайте онлайн школы, в которой обучался <a href="https://loftschool.com/" target="_blank">https://loftschool.com/</a> , читаю статьи различных блогов в Telegram и ВК (Frontender’s notes; Senior Frontend - javascript,html,css; Loftschhol; Типичный верстальщик; Love Frontend; Webtackles и т.д.), читаю книгу Марейна Хавербеке «Выразительный JavaScript», в решении конкретной задачи часто помогает stackoverflow.com. Направления и цели: достичь максимальных результатов в верстке, прокачаться в JS и глубже изучить фреймворки Vue, React.<br><br>

### `8.	Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.` 

Меня зовут Черняк Игорь Александрович, 31 год, живу и работаю в Москве. Веб-технологии начал изучать в 2017 году, с ноября 2018 по апрель 2019 обучался в онлайн школе LoftSchool на профессии веб-разработчик. Также с целью производственной необходимости сдал экзамен в академии «1С Битрикс». На данный момент работаю над сайтом страховой компании «Зетта Страхование» <a href="https://zettains.ru/" target="_blank">https://zettains.ru/</a> и продолжаю самостоятельно развиваться во Frontend-разработке.<br><br>
Все личные проекты можно посмотреть на github <a href="https://github.com/chernyak88/" target="_blank">https://github.com/chernyak88/</a><br>
Из коммерческих сейчас работаю над проектами:<br>
<a href="https://zettains.ru/calculators/kasko-auto/" target="_blank">https://zettains.ru/calculators/kasko-auto/</a><br>
<a href="https://zettains.ru/calculators/dacha-express/" target="_blank">https://zettains.ru/calculators/dacha-express/</a>




