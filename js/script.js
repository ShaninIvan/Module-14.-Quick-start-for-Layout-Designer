// Эта функция при загрузке страницы будет проверять список скиллов и менять прогресс из значения в span.percent
window.onload = () =>{
    [...document.querySelectorAll('.skills-list__skill')].forEach(skill =>{
        let percent = skill.querySelector('.percent').innerText;
        
        percent = (Number.isInteger(parseInt(percent))) ? parseInt(percent) : 0;
        percent = (percent>0) ? percent : 0;
        percent = (percent<100) ? percent : 100;
        
        const level = skill.querySelector('.skills-list__skill-level');
        level.style.width = `${percent}%`;
    })
}