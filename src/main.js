
import data from './data/pokemon/pokemon.js';
import data2 from './data/pokemon/types.js';
import { sortData } from './data.js';
import {filterData} from './data.js';

var sortby="name";
var soryOrder="asc";


var propertyFiltro1= Object.keys(data.pokemon[0]) //recuperamos propiedades
     propertyFiltro1.splice(3,2) //quitamos en el array de propiedades img y about (no queremos que este en nuestro menu)
     propertyFiltro1.sort() //lo ordenamos alfabeticamente para mostrar en menú

     addOptions(propertyFiltro1) //llena el selector del filtro 1
     
     
     addListPok(data) //Muestra todos los pokemons en pantalla

//console.log (sortData (data,sortby,soryOrder));

function addListPok(data){ // En esta funcion llenamos la lista para mostrar todos lo pokemon en pantalla
  var listPok = data.pokemon.map(function(pok){
  return '<li><figure><a href=pokemon.html><img src='+pok.img+'></a><figure> '+pok.name+'</li>'
})
document.getElementById("listPok").innerHTML = listPok.join(""); //con el metodo join quitamos , de la lsta para que no aparezca en pantalla la coma despues de cada imag
}


function addOptions(prop) { //En esta funciòn llenamos el filtro1 con las propieades excepto img y about

  const objFiltoUno = document.getElementById("filtrouno");
  
  
  for (let value in prop) {
   var option = document.createElement("option");
   option.text = prop[value];
   objFiltoUno.add(option);
  }
  }




 



/*var filterAlphabe=filterAlphabe(data)
console.log(filterAlphabe)*/
// elementos del filto
// Por Numero de pokemon
// Por Tipo de Pokemon
// Por Orden Alfabetico
let objTexBox1 = document.getElementById("txbxnumeropokemon"); //Convertir a objeto el textbox de numero de pokemon
document.getElementById("btnbuscar").addEventListener("click",filtrar); //listener de boton filtrar o buscar
document.getElementById("filtrouno").addEventListener("toggle",fnOcultarTxBx) //listener de cambios en menu desplegable 1
document.getElementById("filtrodos").addEventListener("change",fnMenuDos);


function fnFiltadoAlfabetico(){
  
}

/*function fnfiltradoTipo(){
  console.log(objTexBox1.value);
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['num'];
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['name'];
}*/


/*function fnFiltadoAlfabetico(data){
  console.log(data)
  return data
  
}*/
function fnMenuDos(){
  console.log("cambio de menu");
  if(objFiltoDos.option.value =="water"){
    console.log("cambio a agua");
  }
}

function filtrar(){
  fnFiltradoTipo(data2);
}

/*function fnOcultarTxBx(){

  console.log(objFiltoUno.value);
  if(objFiltoUno.value==1){

  }
}*/


 