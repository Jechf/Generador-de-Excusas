
var quien = ['The dog','My granma','His turtle','My bird'];
var que = ['eat','pissed','crushed','broked'];
var cuando = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
var parrafo 


function excuse(){

        let a = Math.floor(Math.random() * quien.length );
        let b = Math.floor(Math.random() * que.length );
        let c = Math.floor(Math.random() * cuando.length );

    let d = ( quien[a]+' '+que[b]+' '+cuando[c]);

    if(parrafo){
        parrafo.innerText = d;
    }
}

window.onload = () => {
 
    document.querySelector("#evento").addEventListener("click", excuse);
    parrafo = document.querySelector("#excusa");

    console.log(parrafo);
}

