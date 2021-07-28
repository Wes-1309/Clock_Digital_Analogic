//Variáveis

let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//Funções
function updateClock(){
    let now = new Date(); //Pegar a hora atual.
    let hour = now.getHours(); //Pegar apenas a hora.
    let minute = now.getMinutes(); //Pegar apenas o minuto.
    let second = now.getSeconds(); //Pegar apenas o segundo.

    //Atualizar o relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //Atualizar o relógio analógico
    //Calcular segundos = 360° / 60 seg = 6°/s
    let sDeg = ((360/60) * second)-90; //Teve que diminuir 90, por que o 0 no CSS e no eixo X e não no Y.
    let mDeg = ((360/60) * minute)-90; //Idem a cima.
    let hDeg = ((360/12) * hour)-90; //Divido por 12, pois o ponteiro de horas são 12 no dia.

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

//Função para corrigir o tempo de 0 a 9 (Ex.: 01, 02,...)
function fixZero(time){
    if(time < 10){
        return '0' + time;
    }else{
        return time;
    }

 // Forma reduzida -> return time < 10 ? `0${time}` : time; (Subsitui o if acima)
}

//Eventos
setInterval(updateClock, 1000);
updateClock(); //Para não ter o delay de 1 segunda para atualizar a tela.