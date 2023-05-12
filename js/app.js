function createDiv(){
    let div = document.createElement('div');
    document.body.appendChild(div);
    return div;
}

function createP(dmain){
    let par = document.createElement('p');
    dmain.appendChild(par);
    return par;
}

function createH1(dmain){
    let h1 = document.createElement("h1");
    dmain.appendChild(h1);
    return h1;
}

function creatList(dmain){
    let list = document.createElement('li');
    dmain.appendChild(list);
    return list;
}


//let p = createP(dmain);
//p.textContent = "Primeiro parágrafo inserido pelo javascript!";