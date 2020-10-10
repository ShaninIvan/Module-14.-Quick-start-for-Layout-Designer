
window.onload = () =>{
    // Эта функция при загрузке страницы будет проверять список скиллов и менять прогресс из значения в span.percent
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