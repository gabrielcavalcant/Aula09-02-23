/*var p = window.document.getElementsByTagName('p')[0]
window.alert(p.innerHTML)*/

/*var p = window.document.getElementsByClassName()[0]
window.document.write(p.innerHTML)

window.alert(typeof(p))*/

/*var p = window.document.querySelector('p.p1')
window.document.write(p.innerText)*/

box.addeventlistener("mouseenter",entrar)
box.addeventlistener("mouseout",sair)
box.addeventlistener("click",clicar)

function entrar(){
    var box = window.document.getElementById("click")
    box.style.background="blue"
}
function sair(){
    var box = window.document.getElementById("click")
    box.style.background="green"
}
function clicar(){
    box.innerText="Cliclou!"

}