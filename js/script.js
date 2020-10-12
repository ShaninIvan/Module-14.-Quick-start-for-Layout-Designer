
window.onload = () =>{
    smoothAnchors();
    dynamicSkills();
};


// Эта функция реализует плавную прокрутку к якорям на странице
const smoothAnchors = () =>{
    
    const items = $('.header__menu li');

    [...items].forEach(item =>{
        const anchor = item.querySelector('a[href*="#"]');
        
        anchor.addEventListener('click', (event)=>{
            event.preventDefault();
        });

        const href = anchor.getAttribute('href');
        let offset = $(href).offset().top;

        offset = (window.innerWidth<=426) ? offset-60 : offset;

        item.addEventListener('click', ()=>{
            $('html').animate({scrollTop: offset}, 700);
        });
        
    });    
};

// Эта функция при загрузке страницы будет проверять список скиллов и менять прогресс из значения в span.percent
const dynamicSkills = () =>{
    
    [...document.querySelectorAll('.about-me__skill')].forEach(skill =>{
        let percent = skill.querySelector('.about-me__percent').innerText;
        
        percent = (Number.isInteger(parseInt(percent))) ? parseInt(percent) : 0;
        percent = (percent>0) ? percent : 0;
        percent = (percent<100) ? percent : 100;
        
        const level = skill.querySelector('.about-me__skill-level');
        level.style.width = `${percent}%`;
    });
};

document.querySelector('.contacts__submit').addEventListener('click', (event)=>{
    event.preventDefault();
});


const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', ()=>{
    
    hamburger.classList.toggle('change');
    if (hamburger.classList.contains('change')){
        menu.style.height = '210px';
    }else{
        menu.style.height = '0';
        
    };

})