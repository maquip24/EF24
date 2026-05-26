function reveal(id){
    document.getElementById(id).style.display = 'block';
}

let time = 40 * 60;

function startTimer(){
    const timerElement = document.getElementById('timer');

    setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if(time > 0){
            time--;
        }
    },1000);
}
