const darkthemebutton = document.querySelector('#DarkButton')
const body = document.querySelector('#body')
const container = document.querySelector('#container')
const languagebutton = document.querySelector('#languagebutton')
const MyName = document.querySelector('#MyName')
const helloworld = document.querySelector('#helloworld')
const titleName = document.querySelector('#titleName')
const DarkButtonImage = document.querySelector('#DarkButtonImage')
const LanguageButtonImage = document.querySelector('#LanguageButtonImage')

var root = document.querySelector(':root')

let DarkFlag = 1;

darkthemebutton.onclick = function () {
    if (DarkFlag == 1){
        root.style.setProperty('--bg-color','#424242');
        root.style.setProperty('--con-color','#212121');
        DarkButtonImage.src = "images/sun.png"
        container.style.color= 'white';
        container.style.boxShadow =  "0 4px 0px 0 rgba(0, 0, 0, 10)";
        DarkFlag = 0
    } else if (DarkFlag==0){
        root.style.setProperty('--bg-color','#edeef0');
        root.style.setProperty('--con-color','white');
        DarkButtonImage.src = "images/moon.png"
        container.style.color= 'black';
        container.style.boxShadow =  "0 4px 0px 0 rgba(0, 0, 0, 0.1)";
        DarkFlag = 1
    }
}

let LanguageFlag = 1;

languagebutton.onclick = function () {
    if (LanguageFlag == 1){
        MyName.innerHTML = "Егор Харитонов"
        helloworld.innerHTML = "Привет, мир!"
        titleName.innerHTML = "Харитонов Егор"
        darkthemebutton.value = "Тёмная тема"
        languagebutton.value = "Change language"
        LanguageButtonImage.src="images/us.png"
        LanguageFlag = 0
    } else if (LanguageFlag==0){
        MyName.innerHTML = "Egor Kharitonov"
        helloworld.innerHTML = "Hello, world!"
        titleName.innerHTML = "Kharitonov Egor"
        languagebutton.value = "Поменять язык"
        LanguageButtonImage.src="images/ru.png"
        LanguageFlag = 1
    }
    
}

