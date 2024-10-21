let leoPosition = 10;
let leoPower = false
let leoForward = false;
let leoBackward = false;
let leo = document.getElementById('leo');

window.addEventListener('keydown' , () =>{
    (event.key == 'ArrowRight') ? moveLeo('forward') :
    (event.key == 'ArrowLeft') ?  moveLeo('Backward') :
    (event.key == ' ') ?  moveLeo(' ') :
    (event.key == ' ') ? moveLeo(' ') :
    null
})

window.addEventListener('keyup', ()=>{
    leo.src = 'leo.gif';
    leoForward = false;
    leoForward = false;
    leoBackward = false;
})

const moveLeo = (type) => {
    if(type == 'forward'){
        if(leoForward == false){
            leo.src = './leo-forward.gif'
            leoForward = true
        }
        leoPosition += 5
        leo.style.left = leoPosition + 'px'
    }
    else if(type == 'Backward'){
        if(leoBackward == false){
            leo.src = './leo-backward.gif'
            leoBackward = true
        }
        leoPosition -= 5
        leo.style.left = leoPosition + 'px'
    }
    else if(type == ' '){
        // if(leoBackward == false){
            leo.src = './leo-power.gif'
            // leoPower = true
        // }
    }
}
