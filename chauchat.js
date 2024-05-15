
let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
function chauchat(carga){
    for (let i = 0; i < carga.length; i++){
        let numeroRandom = Math.random()
        if(numeroRandom > 0.80){
            i = carga.length + 1;
            return "Illo, me he quedao pillá!"
        } else {
            console.log(cargador[i])
            if((i + 1) % 3 == 0){
                console.log(" ")
            }
        }
    }
};

