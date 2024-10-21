window.addEventListener('keydown' , () =>{
    (event.key == 'ArrowRight') ? moveLeo('forward') :
    (event.key == 'ArrowLeft') ?  moveLeo('Backward') :
    (event.key == ' ') ? moveLeo(' ') :
    null
})

const moveLeo = (type) => {
    let leo = document.getElementById('leo');

    if(type == 'forward'){
        console.log(leo.src);
        
      leo.src = './leo.forward.gif'
    }
}