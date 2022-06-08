
var quien = ['the dog','my granma','his turtle','my bird'];
var que = ['eat','pissed','crushed','broked'];
var cuando = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function excuse(){

        let a = Math.floor(Math.random() * quien.length );
        let b = Math.floor(Math.random() * que.length );
        let c = Math.floor(Math.random() * cuando.length );

    let d = ( quien[a]+' '+que[b]+' '+cuando[c]);

    return d;
}

console.log(excuse());