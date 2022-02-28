// scrolling + burger

const menu_icon = document.querySelector('.menu-icon');
const menu_body = document.querySelector('.menu-body');
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

menu_icon.addEventListener('click', function(){
    menu_icon.classList.toggle('active');
    menu_body.classList.toggle('active');
})

if(menuLinks.length > 0){
    menuLinks.forEach(menulink => {
        menulink.addEventListener("click", onMenuClick)
    })
    function onMenuClick(e){
        menu_icon.classList.toggle('active');
        menu_body.classList.toggle('active');
        const Menulink = e.target;
        if(Menulink.dataset.goto && document.querySelector(Menulink.dataset.goto)){
            const gotoBlock = document.querySelector(Menulink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

//change_theme

myStorage = window.localStorage
myStorage.setItem('theme', 'light');
document.querySelector(".themes").addEventListener('change', (event) => {
    if(event.target.nodeName == "INPUT"){
        document.documentElement.classList.remove("dark", "light");
        myStorage['theme'] = event.target.value;
        document.documentElement.classList.add(myStorage['theme']);
    }
});

//prog_slider

let prog_position = 0;
const prog_slider_show = 1;
const prog_slider_scroll = 1;
const prog_track = document.querySelector('.prog-slider-track');
const prog_contain = document.querySelector('.prog-slider-contain');
const prog_items = document.querySelectorAll('.prog-slider-item');
const prog_itemscount = prog_items.length - 1;
const prog_contain_width = prog_contain.clientWidth;
prog_items.forEach((it) => {
    it.style.minWidth = `${prog_contain_width}px`;
});

function prog_change(){
    prog_position -= prog_contain_width;
    if(prog_position < -prog_contain_width * prog_itemscount){prog_position = 0;};
    progsetPosition();
};

setInterval(prog_change, 2000);

const progsetPosition = () =>{
    prog_track.style.transform = `translateX(${prog_position}px)`
}

//sport_slider

let sport_position = 0;
const sport_slider_show = 1;
const sport_slider_scroll = 1;
const sport_track = document.querySelector('.sport-slider-track');
const sport_contain = document.querySelector('.sport-slider-contain');
const sport_items = document.querySelectorAll('.sport-slider-item');
const sport_itemscount = sport_items.length - 1;
const sport_contain_width = sport_contain.clientWidth;
sport_items.forEach((it) => {
    it.style.minWidth = `${sport_contain_width}px`;
});

function sport_change(){
    sport_position -= sport_contain_width;
    if(sport_position < -sport_contain_width * sport_itemscount){sport_position = 0;};
    sportsetPosition();
};

setInterval(sport_change, 2000);

const sportsetPosition = () =>{
    sport_track.style.transform = `translateX(${sport_position}px)`
}