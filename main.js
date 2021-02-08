const eventType = 'click',
    classOn = 'on';

function handleSettingBox() {
    const btnSetting = document.querySelector('.hd_icons .fa-ellipsis-v'),
        setttingBg = document.querySelector('.setting_bg'),
        settingBox = document.querySelector('#setting');

    btnSetting.addEventListener(eventType, () => 
        settingBox.classList.toggle(classOn)
    );
    setttingBg.addEventListener(eventType, () =>
        settingBox.classList.toggle(classOn)
    );
}

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
    handleSettingBox();
}

init();