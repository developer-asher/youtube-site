const iconSearch = document.querySelector('.hd_icons .fa-search'),
    iconSetting = document.querySelector('.hd_icons .fa-ellipsis-v'),
    searchBox = document.querySelector('#search'),
    iconBack = document.querySelector('.icon_back'),
    settingWrap = document.querySelector('#setting');
    setList = document.querySelector('.setting_list'),
    setBg = document.querySelector('.setting_bg');

function handleSettingBox() {
    iconSetting.addEventListener('click', ()=>
        settingWrap.classList.add('on')
    );
    setBg.addEventListener('click', () =>
        settingWrap.classList.remove('on')
    );
}

function handleSearchBox() {
    iconSearch.addEventListener('click', () =>
        searchBox.classList.add('on')
    );
    iconBack.addEventListener('click', () =>
        searchBox.classList.remove('on')
    );
}

function init(){
    handleSearchBox();
    handleSettingBox();
}

init();