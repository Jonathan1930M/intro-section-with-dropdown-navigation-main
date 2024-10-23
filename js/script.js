let buttonIconMenuMobile = document.getElementById("icon-menu")
let buttonClosedMenu = document.getElementById('iconClosed')
let buttonOpenMenuFeature = document.getElementById('btnFeature')
let buttonOpenMenuCompany = document.getElementById('btnCompany')
let iconArrowFeatures = document.getElementById('arrowFeatures')
let iconArrowCompany = document.getElementById('arrowCompany')
let menuMobile = document.getElementById('menu-Mobile')
let menuFeatures = document.getElementById('menuFeatures')
let menuCompany = document.getElementById('menuCompany')

buttonIconMenuMobile.addEventListener('click', openMenuMobile)
buttonClosedMenu.addEventListener('click', closedMenuMobile)
buttonOpenMenuFeature.addEventListener('click', openMenuFeature)
buttonOpenMenuCompany.addEventListener('click', openMenuCompany)

function openMenuMobile() {
    menuMobile.classList.remove('activate')
}

function closedMenuMobile() {
    menuMobile.classList.add('activate')

    let isOpenMenuFeature = menuFeatures.classList.contains('activate')
    let isOpenMenuCompany = menuCompany.classList.contains('activate')


    if(!isOpenMenuFeature && !isOpenMenuCompany) {
        menuFeatures.classList.add('activate')
        menuCompany.classList.add('activate')
        iconArrowFeatures.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
        iconArrowCompany.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
    }
    else if(!isOpenMenuFeature) {
        menuFeatures.classList.add('activate')
        iconArrowFeatures.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
    }
    else if(!isOpenMenuCompany){
        menuCompany.classList.add('activate')
        iconArrowCompany.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
    }
    
} 

function openMenuFeature() {
    menuFeatures.classList.toggle('activate')

    if(menuFeatures.classList.contains('activate')){
        iconArrowFeatures.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
    } else {
        iconArrowFeatures.style.backgroundImage = "url('../images/icon-arrow-up.svg')"
    }
    
}
function openMenuCompany() {
    menuCompany.classList.toggle('activate')

    if(menuCompany.classList.contains('activate')){
        iconArrowCompany.style.backgroundImage = "url('../images/icon-arrow-down.svg')"
    } else {
        iconArrowCompany.style.backgroundImage = "url('../images/icon-arrow-up.svg')"
    }
}
