/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent() {

    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Функция для проверки и сохранения  данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
*
* */
function handleSession() {

    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    // Проверка на возраст и сохранение сессии
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст");
        window.sessionStorage.setItem("userAge", input);

        checker(true);
    } else {
        checker(false);
    }

    // Вывод в консоль
    logger();
    for (let result of session) {
        console.log(result);
    }
}

//Проверка возраста
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        // Добавим проверку на первое посещение, чтобы не показывать приветствие
        // лишний раз
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function showTime(city, timeZone) {
    let time = document.getElementById(city);
    let h = new Date().getUTCHours();
    let m = new Date().getUTCMinutes();
    let s = new Date().getUTCSeconds();

    if (h + timeZone > 23 || h + timeZone < 0)
        h = Math.abs(h + timeZone - 24);
    else
        h = h + timeZone;
    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    if (s < 10)
        s = '0' + s;
    time.innerHTML = h + ":" + m + ":" + s;
}

//Вывод в консоль
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"));
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"));
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"));
}