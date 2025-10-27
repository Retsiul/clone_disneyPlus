document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(`[data-tab-button]`);


    //    função principal
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