let container = document.getElementById("TimerParent")
let template = document.getElementById("Timer")
let timers = ['pushups', 'pullups', 'handstands']

for(let timer of timers)
{
    let elem = template.content.children[0].cloneNode(true)
    let title = elem.getElementsByClassName("timer-title")[0]
    title.textContent = timer
    
    elem.addEventListener('click', (e) => {
        let full = elem.getElementsByClassName("full")[0]
        // let clock = elem.getElementsByClassName("clock")[0]
        
        full.style.bottom = "-100%";
        // clock.textContent = `${5}:${0}0`
        countdown(elem, 300)
    })
    container.appendChild(elem)
}


let countdown = (element, time) =>
{
    let full = element.getElementsByClassName("full")[0]
    // let clock = element.getElementsByClassName("clock")[0]

    let date = new Date()
    let now = date.getSeconds()
    console.log(now)

    time--
    full.style.bottom = `-${time % 100}%`
    if(time > 0)
        setTimeout(countdown, 1000, element, time)
}
