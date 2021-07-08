import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example, data);

let objFiltoUno = document.getElementById("filtrouno");
let objTexBox1 = document.getElementById("txbxnumeropokemon");
document.getElementById("btnbuscar").addEventListener("click",filtrar);
document.getElementById("filtrouno").addEventListener("toggle",fnOcultarTxBx)

document.getElementById("test").innerHTML = data.pokemon[0]['size']['height'];


function filtrar(){
  console.log(objTexBox1.value);
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['num'];
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['name'];
}

function fnOcultarTxBx(){

  console.log(objFiltoUno.value);
  if(objFiltoUno.value==1){

  }
}


 