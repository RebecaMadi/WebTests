let dmain = createDiv();
dmain.className = "maindiv";

let title = createH1(dmain);
title.className = 'pagName'
title.textContent = 'Wiki Linux';

let sum = createH1(dmain);
sum.textContent='Sumário'

let ol1 = creatList(dmain);
ol1.textContent = "Diretórios e Arquivos"

let ol2 = creatList(dmain);
ol2.textContent = "Modo texto"

ol1.onclick = function(){
    window.location.href = 'pag1.html'
    console.log("clicou 1!");
}

ol2.onclick = function(){
    console.log("clicou 2!");
}