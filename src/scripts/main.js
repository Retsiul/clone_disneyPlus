document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(`[data-tab-button]`);
    const questions = document.querySelectorAll(`[data-faq-question]`);

    // ----------------------------------------------------------------------
    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const position = window.scrollY;
        if (position < heightHero) {
            visibityHeader()
            // console.log('menor que a altura')
        }
        else {
            invisibityHeader()
            console.log('menor que a altura')
        }
    })

    function visibityHeader() {
        const header = document.querySelector('.header');
        header.classList.add('header--is-hidden')

    }


    function invisibityHeader() {
        const header = document.querySelector('.header');
        header.classList.remove('header--is-hidden')

    }

    // ---------------------------------------------------------------------

    //   progrmação abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const targetButton = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetButton}]`);

            // funcçao sendo chamada dentro de outra função
            closedTabs()
            tab.classList.add('shows__list--is-active');
            closedButtons()
            botao.target.classList.add('shows__tabs__button--is-active');


        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrClose)
    }
})


// função que remove a classe da tab
function closedTabs() {
    const tabsContainer = document.querySelectorAll(`[data-tab-id]`);

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');

    }

}

// função que remove a classe do botão
function closedButtons() {
    const buttonInative = document.querySelectorAll(`[data-tab-button]`);

    for (let i = 0; i < buttonInative.length; i++) {
        buttonInative[i].classList.remove('shows__tabs__button--is-active');

    }

}

// abre e fecha faq:
function openOrClose(e) {
    const addClass = "faq__questions__item--is-open";
    const callBack = e.target.parentNode;
    callBack.classList.toggle(addClass)
}