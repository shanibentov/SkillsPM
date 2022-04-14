const btn = document.getElementById("button1");
// console.log(btn)
btn.innerHTML = "Clear";
btn.style.alignItems = 'center';
btn.style.fontSize = '20px';

const mainTable = document.getElementById('main-table')
const goods = document.getElementsByClassName('good')
console.log(goods)

function changecolor(){
    document.querySelector('good').style.color = 'red'
}