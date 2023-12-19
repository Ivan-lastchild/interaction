// Знаю, що можна реалізувати це і на промптах, проте вирішив 
// реалізувати це за допомогою інпутів і взаємодією з ДОМ 

let userNameInput = document.querySelector(".user-data__name");
let userSurnameInput = document.querySelector(".user-data__surname");
let userBirthdayDayInput = document.querySelector(".user-data__birthday-day");
let userBirthdayMonthInput = document.querySelector(".user-data__birthday-month");
let userBirthdayYearInput = document.querySelector(".user-data__birthday-year");
let sbmtBtn = document.querySelector(".submit-btn");

let userName = "";
let userSurname = "";
let userBirthdayDay = "";
let userBirthdayMonth = "";
let userBirthdayYear = "";
const currentYear = 2022;

sbmtBtn.addEventListener("click", ()=>{
    userName = userNameInput.value;
    userSurname = userSurnameInput.value;
    userBirthdayDay = +userBirthdayDayInput.value;
    userBirthdayMonth = +userBirthdayMonthInput.value;
    userBirthdayYear = +userBirthdayYearInput.value;

    while (userBirthdayDay<=0 || userBirthdayDay>31) {
      userBirthdayDay = +prompt("Enter correct Birth Day");
    };
  
    while (userBirthdayMonth<=0 || userBirthdayMonth>12){
      userBirthdayMonth = +prompt("Enter correct Birth Month");
    };

    //Перевіряемо на правильність введення данних, щоб не було 
    //порожніх рядків в іменах та прізвищах, та були лише числові дані в даті народження
    //не став робити за допомогою регулярних виразів та не став робити додаткові функції, проте знаю, що
    // код стає дуже громіздким

    // не розумію як додати зображення до знаку зодіаку через ЖС
    if(userName 
        && isNaN(userName) 
        && userSurname 
        && isNaN(userSurname)
        && userBirthdayDay
        && !isNaN(userBirthdayDay)
        && userBirthdayMonth
        && !isNaN(userBirthdayMonth)
        && userBirthdayYear
        && !isNaN (userBirthdayYear)) {
        document.write(`<p> User Bio: ${userName} ${userSurname}, ${defineAge(userBirthdayYear)} ${getEndWord(defineAge(userBirthdayYear))} ${defineLeapYear(userBirthdayYear)}, ${defineZodiac(userBirthdayDay, userBirthdayMonth)}</p>`)
    } else {
        alert("Enter current data")
    }
});

// функція для перевірки закінчення слова "рік"

function getEndWord(age){
    if (age.toString().slice(-1) == 1){
        return "рік"
    } else if (age.toString().slice(-1) >=2 && age.toString().slice(-1)<=4){
        return "роки"
    } else {
        return "років"
    }
}


//Обираемо знак зодіаку користувача
function defineZodiac(day, month) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return  'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)){
      return "Pisces";
    } 
}

//Визначаемо вік користувача

function defineAge(year){
    return currentYear - year;
}

//Визначаємо чи є рік народження високосним
function defineLeapYear(year){
    if(year % 400 === 0){
        return "Leap year" 
    } else if (year % 100 === 0) {
        return ""
    } else if (year % 4 === 0){
        return "Leap year"
    } else {
        return ""
    }
}



