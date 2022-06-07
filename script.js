const darkthemebutton = document.querySelector('#DarkButton')
const body = document.querySelector('#body')
const container = document.querySelector('#container')
const languagebutton = document.querySelector('#languagebutton')
const MyName = document.querySelector('#MyName')
const helloworld = document.querySelector('#helloworld')
const titleName = document.querySelector('#titleName')
const DarkButtonImage = document.querySelector('#DarkButtonImage')
const LanguageButtonImage = document.querySelector('#LanguageButtonImage')
const main = document.querySelector('#main')
const header = document.querySelector('#header')
const ContactsButton = document.querySelector('#ContactsButton')
const mainText = document.querySelector('#mainText')
const mainContacts = document.querySelector('#mainContacts')
const HomeButton = document.querySelector('#HomeButton')
const mainContactstext = document.querySelector('#mainContactstext')
const mainContactsTelegram = document.querySelector('#mainContactsTelegram')
const mainContactsVk = document.querySelector('#mainContactsVk')

var root = document.querySelector(':root')

let DarkFlag = 1;

darkthemebutton.onclick = function () {
    if (DarkFlag == 1){
        body.style.backgroundColor = "var(--bg-color-dark)"
        main.style.backgroundColor = "var(--main-color-dark)"
        header.style.backgroundColor = "var(--header-color-dark)"
        DarkButton.style.backgroundColor = "var(--header-color-dark)"
        languagebutton.style.backgroundColor = "var(--header-color-dark)"
        container.style.backgroundColor = "var(--main-color-dark)"
        container.style.boxShadow = "var(--shadow-color-dark)"

        body.style.color= 'var(--text-color-dark)'
        mainContactsTelegram.style.color = 'var(--text-color-dark)'
        mainContactsVk.style.color = 'var(--text-color-dark)'
        DarkButtonImage.src = "images/sun.png"
        DarkFlag = 0

    } else if (DarkFlag==0){
        body.style.backgroundColor = "var(--bg-color-white)"
        main.style.backgroundColor = "var(--main-color-white)"
        header.style.backgroundColor = "var(--header-color-white)"
        DarkButton.style.backgroundColor = "var(--header-color-white)"
        languagebutton.style.backgroundColor = "var(--header-color-white)"
        container.style.backgroundColor = "var(--main-color-white)"
        container.style.boxShadow = "var(--shadow-color-white)"

        DarkButtonImage.src = "images/moon.png"
        body.style.color= 'var(--text-color-white)';
        mainContactsTelegram.style.color = 'var(--text-color-white)'
        mainContactsVk.style.color = 'var(--text-color-white)'
        DarkFlag = 1
    }
}

let LanguageFlag = 1;

languagebutton.onclick = function () {
    if (LanguageFlag == 1){
        MyName.innerHTML = "Егор Харитонов"
        helloworld.innerHTML = "Привет, мир!"
        titleName.innerHTML = "Харитонов Егор"
        LanguageButtonImage.src="images/us.png"
        mainContactstext.innerHTML = "Контакты"
        ContactsButton.innerHTML = "Контакты"
        HomeButton.innerHTML = "Главная"
        LanguageFlag = 0
    } else if (LanguageFlag==0){
        MyName.innerHTML = "Egor Kharitonov"
        helloworld.innerHTML = "Hello, world!"
        titleName.innerHTML = "Kharitonov Egor"
        LanguageButtonImage.src="images/ru.png"
        mainContactstext.innerHTML = "Contacts"
        ContactsButton.innerHTML = "Contacts"
        HomeButton.innerHTML = "Home"
        LanguageFlag = 1
    }
    
}

ContactsButton.onclick = function () {
    mainText.style.display = "none"
    mainContacts.style.display = "block"
}

HomeButton.onclick = function () {
    mainText.style.display = "block"
    mainContacts.style.display = "none"
}