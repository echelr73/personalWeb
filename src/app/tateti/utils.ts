/* Utility to show content into the view */
export const displayLog = (content: string)=> {
    let element = document.createElement('div');
    element.innerHTML = content;
    const logContainer: any = document.getElementById("log-container");
    logContainer.appendChild(element);
}

export const resetTateti = () =>{
    //Se ocultan todos los elementos de la class cruz
    var collectionCruz = Array.from(document.getElementsByClassName('cruz') as HTMLCollectionOf<HTMLElement>);
    collectionCruz.forEach((element) => {
        element.style.visibility = "hidden";
    });

    //Se ocultan todos los elementos de la class circulo
    var collectionCirculo = Array.from(document.getElementsByClassName('circulo') as HTMLCollectionOf<HTMLElement>);
    collectionCirculo.forEach((element) => {
        element.style.visibility = "hidden";
    });
}

export const mostrarGrilla = (content: any[])=> {
    var element: any;
    var grid: any = document.getElementById('grid');;
    if (content[1] % 2 == 0){
        element = document.getElementById(content[0]+"c");
    }else{
        element = document.getElementById(content[0]+"z");
    }
    element.style.visibility="visible";

    if (content[1] >= 4){
        if (
            //FILA SUPERIOR CRUZ
            (document.getElementById("0.0z")?.style.visibility =="visible" &&
            document.getElementById("1.0z")?.style.visibility =="visible" &&
            document.getElementById("2.0z")?.style.visibility =="visible") ||
            //FILA DEL MEDIO CRUZ
            (document.getElementById("0.1z")?.style.visibility =="visible" &&
            document.getElementById("1.1z")?.style.visibility =="visible" &&
            document.getElementById("2.1z")?.style.visibility =="visible") ||
            //FILA INFERIOR CRUZ
            (document.getElementById("0.2z")?.style.visibility =="visible" &&
            document.getElementById("1.2z")?.style.visibility =="visible" &&
            document.getElementById("2.2z")?.style.visibility =="visible") ||
            //DIAGONAL 1 CRUZ
            (document.getElementById("0.0z")?.style.visibility =="visible" &&
            document.getElementById("1.1z")?.style.visibility =="visible" &&
            document.getElementById("2.2z")?.style.visibility =="visible") ||
            //DIAGONAL 2 CRUZ
            (document.getElementById("2.0z")?.style.visibility =="visible" &&
            document.getElementById("1.1z")?.style.visibility =="visible" &&
            document.getElementById("0.2z")?.style.visibility =="visible") ||
            //FILA INFERIOR CRUZ
            (document.getElementById("0.2z")?.style.visibility =="visible" &&
            document.getElementById("1.2z")?.style.visibility =="visible" &&
            document.getElementById("2.2z")?.style.visibility =="visible") ||
            //COLUMNA IZQ CRUZ
            (document.getElementById("0.0z")?.style.visibility =="visible" &&
            document.getElementById("0.1z")?.style.visibility =="visible" &&
            document.getElementById("0.2z")?.style.visibility =="visible") ||
            //COLUMNA MEDIO CRUZ
            (document.getElementById("1.0z")?.style.visibility =="visible" &&
            document.getElementById("1.1z")?.style.visibility =="visible" &&
            document.getElementById("1.2z")?.style.visibility =="visible") ||
            //COLUMNA DER CRUZ
            (document.getElementById("2.0z")?.style.visibility =="visible" &&
            document.getElementById("2.1z")?.style.visibility =="visible" &&
            document.getElementById("2.2z")?.style.visibility =="visible")
        ){
            displayLog("EL GANADOR ES LA CRUZ!");
            //Se bloquean lo click
            grid.style.pointerEvents = "none";
            //Se setean unos microsegundos para esconder el grid
            setTimeout(() => {
                grid.style.display = "none";  
            }, 1000);
        }
        if (
            //FILA SUPERIOR CIRCULO
            (document.getElementById("0.0c")?.style.visibility =="visible" &&
            document.getElementById("1.0c")?.style.visibility =="visible" &&
            document.getElementById("2.0c")?.style.visibility =="visible") ||
            //FILA DEL MEDIO CIRCULO
            (document.getElementById("0.1c")?.style.visibility =="visible" &&
            document.getElementById("1.1c")?.style.visibility =="visible" &&
            document.getElementById("2.1c")?.style.visibility =="visible") ||
            //FILA INFERIOR CIRCULO
            (document.getElementById("0.2c")?.style.visibility =="visible" &&
            document.getElementById("1.2c")?.style.visibility =="visible" &&
            document.getElementById("2.2c")?.style.visibility =="visible") ||
            //DIAGONAL 1 CIRCULO
            (document.getElementById("0.0c")?.style.visibility =="visible" &&
            document.getElementById("1.1c")?.style.visibility =="visible" &&
            document.getElementById("2.2c")?.style.visibility =="visible") ||
            //DIAGONAL 2 CIRCULO
            (document.getElementById("2.0c")?.style.visibility =="visible" &&
            document.getElementById("1.1c")?.style.visibility =="visible" &&
            document.getElementById("0.2c")?.style.visibility =="visible") ||
            //FILA INFERIOR CIRCULO
            (document.getElementById("0.2c")?.style.visibility =="visible" &&
            document.getElementById("1.2c")?.style.visibility =="visible" &&
            document.getElementById("2.2c")?.style.visibility =="visible") ||
            //COLUMNA IZQ CIRCULO
            (document.getElementById("0.0c")?.style.visibility =="visible" &&
            document.getElementById("0.1c")?.style.visibility =="visible" &&
            document.getElementById("0.2c")?.style.visibility =="visible") ||
            //COLUMNA MEDIO CIRCULO
            (document.getElementById("1.0c")?.style.visibility =="visible" &&
            document.getElementById("1.1c")?.style.visibility =="visible" &&
            document.getElementById("1.2c")?.style.visibility =="visible") ||
            //COLUMNA DER CIRCULO
            (document.getElementById("2.0c")?.style.visibility =="visible" &&
            document.getElementById("2.1c")?.style.visibility =="visible" &&
            document.getElementById("2.2c")?.style.visibility =="visible")
        ){
            displayLog("EL GANADOR ES EL CIRCULO!");
            //Se bloquean lo click
            grid.style.pointerEvents = "none";
            //Se setean unos microsegundos para esconder el grid
            setTimeout(() => {
                grid.style.display = "none";  
            }, 1000);
        }
    }
}