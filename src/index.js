import './index.scss';


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const namePhrases = ['NAOMIE MARCO'];
    
    const mainName = document.getElementById("main-name");

    let sleepTime = 200;
    let nameIndex = 0;

    const writeLoop = async () => {
        while(true) {
            let nameWord = namePhrases[nameIndex];

            for (let i = 0; i < nameWord.length; i++) {
                mainName.innerText = nameWord.substring(0, i + 1);
                await sleep(sleepTime);
                
            }
            await sleep(sleepTime);
            if (nameIndex === namePhrases.length - 1);
            return(true);
 
        }

        
    }
 writeLoop();


 const slideInMain = () => {
    const slideInDesc = document.querySelector('.text-summary');

    window.addEventListener('scroll', () => {
        const {scrollTop, clientHeight} = document.documentElement;
        
        const topElementToTopViewport = slideInDesc.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50) {
            slideInDesc.classList.add('active');
        }
    })
 }

 slideInMain();

 const slideInExperiences = () => {
    const slideInDesc = document.querySelector('.experience-text');

    window.addEventListener('scroll', () => {
        const {scrollTop, clientHeight} = document.documentElement;
        
        const topElementToTopViewport = slideInDesc.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50) {
            slideInDesc.classList.add('active');
        }
    })
 }

 slideInExperiences();

 const slideInSkill = () => {
    const slideInDesc = document.querySelector('.skill-competence');

    window.addEventListener('scroll', () => {
        const {scrollTop, clientHeight} = document.documentElement;
        
        const topElementToTopViewport = slideInDesc.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50) {
            slideInDesc.classList.add('active');
        }
    })
 }

 slideInSkill();

