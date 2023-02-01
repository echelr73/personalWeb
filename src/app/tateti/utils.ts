/* Utility to show content into the view */
export const displayLog = (content: string)=> {
    let element = document.createElement('div');
    element.innerHTML = content;
    const logContainer: any = document.getElementById("log-container");
    logContainer.appendChild(element);
}

export const mostrarGrilla = (content: any[])=> {
    var element: any;
    console.log(content);
    if (content[1] % 2 == 0){
        element = document.getElementById(content[0]+"c");
    }else{
        element = document.getElementById(content[0]+"z");
    }
    element.style.visibility="visible";
}