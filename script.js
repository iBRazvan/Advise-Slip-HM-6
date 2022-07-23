const button = document.getElementById("submit-btn")
const bubble = document.getElementById("speech")
const idNumber = document.getElementById("idNo")

function renderAdvice(advice, id) {
    bubble.textContent = advice;
    idNumber.textContent = id;

}

async function getAdvices() {
    const url = "https://api.adviceslip.com/advice"

    let advice = "";
    let id = "";

    try {
        const response = await fetch(url)
        const data = await response.json()

        advice = data.slip.advice;
        id = data.slip.id;
  
    }
    catch(e){
        console.log(e)
    }
    renderAdvice(advice, id);
    tellAdvise(advice);
}

function tellAdvise(advice) {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: advice,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const submitbtn = document.getElementById("submit-btn")
submitbtn.addEventListener('click', getAdvices)