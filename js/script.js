//работа плавающей кнопки
let flyBtn = document.querySelector('.fly-button');
window.addEventListener('scroll', btnUp);
window.addEventListener('DOMContentLoaded', btnUp)

function btnUp() {
    let a = document.documentElement.scrollTop;
    if (a > 600) {
        flyBtn.classList.add('active');
    } else {
        flyBtn.classList.remove('active');
    }
}

flyBtn.addEventListener('click', scrolUp);

function scrolUp() {
    window.scrollTo(0,0);
    flyBtn.classList.remove('visible');
}

//работа меню

let menuBtn = document.querySelector('.menu__btn');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let burgerMenu = document.querySelector('.burger-menu');
let closeBtn = document.querySelector('.burger-menu__btn');

menuBtn.addEventListener('click', showMenu);

function showMenu() {
    main.classList.add('active');
    footer.classList.add('active');
    burgerMenu.classList.add('active');
}

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
    main.classList.remove('active');
    footer.classList.remove('active');
    burgerMenu.classList.remove('active');
}

let links = document.querySelectorAll('.nav-menu__link');

for(link of links) {
    link.addEventListener('click', function(){
        main.classList.remove('active');
        footer.classList.remove('active');
        burgerMenu.classList.remove('active');
    })
}

//плавный скролл

let scrollLinks = document.querySelectorAll('a[href^="#"]');
for(scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

//функция getDayInfo

let input = document.querySelector('.calendar__input');
let calendarBtn = document.querySelector('.calendar__btn');
let divResult = document.querySelector('.calehdar__result');
let dateInp;

input.addEventListener('change', getDate);

function getDate() {
    dateInp = input.value;
}

function getDayInfo(date) {
    dateStr = String(dateInp);
    myYear = dateStr.substring(0,4);
    strMonth = dateStr.substring(5,7);
    if (strMonth[0] == 0) {
        myMonth = strMonth[1] - 1;
    } else {
        myMonth = strMonth - 1;
    }
    day = dateStr.substring(8);
    let myDate = new Date(myYear, myMonth, day);
    let currentDay = myDate.getDay();
    let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    dateNumber = myDate.getDate();
    weekOfMonth = Math.ceil((dateNumber + 6 - currentDay)/7);
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let showMonth;
    switch (strMonth) {
        case '01': showMonth = months[0];
        break;
        case '02': showMonth = months[1];
        break;
        case '03': showMonth = months[2];
        break;
        case '04': showMonth = months[3];
        break;
        case '05': showMonth = months[4];
        break;
        case '06': showMonth = months[5];
        break;
        case '07': showMonth = months[6];
        break;
        case '08': showMonth = months[7];
        break;
        case '09': showMonth = months[8];
        break;
        case '10': showMonth = months[9];
        break;
        case '11': showMonth = months[10];
        break;
        case '12': showMonth = months[11];
        break;
    }
    divResult.innerHTML = weekDays[currentDay] + ','+ ' '+ weekOfMonth+ ' ' + 'неделя' + ' ' + showMonth + ' ' + myYear +' ' + 'года';
}

calendarBtn.addEventListener('click', showDayInfo);

function showDayInfo() {
    getDayInfo(dateInp);
}