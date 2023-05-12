function createP(){
    let par = document.createElement('p');
    par.textContent = "Primeiro parágrafo inserido pelo javascript!";
    document.body.appendChild(par);
}

function createDiv(){
    let div = document.createElement('div');
    div.textContent = '?';
    document.body.appendChild(div);
}

createP();
createDiv();