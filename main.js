const eventType = 'click',
    classOn = 'on';

function handleSearchBox() {
    const btnSearch = document.querySelector('.hd_icons .fa-search'),
    btnBack = document.querySelector('.icon_back'),
    searchBox = document.querySelector('#search');

    btnSearch.addEventListener(eventType, () =>
        searchBox.classList.toggle(classOn)
    );
    btnBack.addEventListener(eventType, () =>
        searchBox.classList.toggle(classOn)
    );
}

function init(){
    handleSearchBox();
}

init();