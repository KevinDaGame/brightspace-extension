chrome.runtime.onMessage.addListener(function(message) {
    const { command } = message;
    if (command === 'quick-search') {
        console.log('testing')
        let element = document.querySelector("d2l-navigation").querySelector('d2l-navigation-main-header').querySelector('d2l-dropdown').querySelector('d2l-navigation-button-notification-icon');
        console.log(element);
        element.click();
        setTimeout(() => {
            select();
        }, 500);

    }
});

function select() {
    element = document.querySelector("d2l-navigation").querySelector('d2l-navigation-main-header').querySelector('d2l-dropdown').querySelector('d2l-dropdown-content').querySelector('div>div>div').querySelector('d2l-input-search').shadowRoot.querySelector('d2l-input-text').shadowRoot.querySelector('div>div>input');
    element.select();

}
document.addEventListener('load', () => {
    document.querySelector("d2l-navigation").querySelector('d2l-navigation-main-header').querySelector('d2l-dropdown').querySelector('d2l-dropdown-content').querySelector('d2l-input-search').querySelector('d2l-input-text').querySelector('d2l-button-icon').querySelector('d2l-icon').style.display = "none";
});