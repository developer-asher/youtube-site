const eventType = 'click',
    classOn = 'on';


function handleVideoInfo() {
    const btnArrow = document.querySelector('.btn_toggle'),
        arrowUpDown = btnArrow.querySelector('i'),
        videoInfo = document.querySelector('#video_info');

    btnArrow.addEventListener(eventType, () => {
        videoInfo.classList.toggle(classOn)
        
        if(arrowUpDown.classList.contains('fa-arrow-up')) {
            arrowUpDown.classList.remove('fa-arrow-up');
            arrowUpDown.classList.add('fa-arrow-down');
        }
        else if(arrowUpDown.classList.contains('fa-arrow-down')) {
            arrowUpDown.classList.remove('fa-arrow-down');
            arrowUpDown.classList.add('fa-arrow-up');
        }
    });
}

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
    handleVideoInfo();
function handleVideoInfo() {
    const btnArrow = document.querySelector('.btn_toggle'),
        arrowUpDown = btnArrow.querySelector('i'),
        videoInfo = document.querySelector('#video_info');

    btnArrow.addEventListener(eventType, () => {
        videoInfo.classList.toggle(classOn)
        
        if(arrowUpDown.classList.contains('fa-arrow-up')) {
            arrowUpDown.classList.remove('fa-arrow-up');
            arrowUpDown.classList.add('fa-arrow-down');
        }
        else if(arrowUpDown.classList.contains('fa-arrow-down')) {
            arrowUpDown.classList.remove('fa-arrow-down');
            arrowUpDown.classList.add('fa-arrow-up');
        }
    });
}
}

init();