
import data from './data/pokemon/pokemon.js';
import data2 from './data/pokemon/types.js';
import { sortData } from './data.js';
import {filterData} from './data.js';

console.log(data);
const objFiltroDos = document.getElementById("filtrodos");
const objFiltroUno = document.getElementById("filtrouno");



document.getElementById("filtrouno").addEventListener("change", addPropFiltro2);
document.getElementById("btnbuscar").addEventListener("click",filtrar);
document.getElementById("filtrodos").addEventListener("change", filtrar);



var propertyFiltro1= Object.keys(data.pokemon[0]) //recuperamos propiedades
objFiltroUno.value = 6;
//addPropFiltro2();     
propertyFiltro1 = propertyFiltro1.filter(function(exc) {
  if(exc != 'size' && exc != 'img' && exc != 'weaknesses' && exc != 'about'&& exc != 'generation' && exc != 'pokemon-rarity' && exc != 'encounter' && exc != 'spawn-chance' && exc  != 'buddy-distance-km'){
    return true
  }
  else{
    return false
  }
});

addOptions(propertyFiltro1) //llena el selector del filtro 1
addPropFiltro2();
filtrar();
//addListPok(data) //Muestra todos los pokemons en pantalla



/*function addListPok(data){ // En esta funcion llenamos la lista para mostrar todos lo pokemon en pantalla
  var listPok = data.pokemon.map(function(pok){
  return '<li><figure><a href=pokemon.html><img src='+pok.img+'></a><figure> '+pok.name+'</li>'
})
document.getElementById("listPok").innerHTML = listPok.join(""); //con el metodo join quitamos , de la lsta para que no aparezca en pantalla la coma despues de cada imag
}*/


function addOptions(prop) { //En esta funciòn llenamos el filtro1 con las propieades excepto img y about

  for (let value in prop) {
    var option = document.createElement("option");
    option.text = traductor(prop[value]);
    option.value=prop[value];
    objFiltroUno.add(option);
   
  }
  
}

function addPropFiltro2() { //En esta funciòn llenamos el filtro1 con las propieades excepto img y about

  let optionFiltro1= objFiltroUno.value;
  
  let tipo;
  let tipoArray="";
  let arrayProp=[];

  
  fnBoxPuntBase(optionFiltro1);
  
  
  for (let i=0; i<=data.pokemon.length-1; i++){
    if(typeof data.pokemon[i][optionFiltro1] == "string"){
      
      tipo = Object.values(data.pokemon[i][optionFiltro1]);
      tipoArray="";
      for(let k=0; k<=tipo.length-1;k++){
        tipoArray=tipoArray+tipo[k];
      }
      arrayProp.push(tipoArray);
    }
    else{


      if(typeof data.pokemon[i][optionFiltro1].length == "undefined"){
        tipo = Object.keys(data.pokemon[i][optionFiltro1]);
          for(let k=0; k<=tipo.length-1;k++){
            arrayProp.push(tipo[k]);
          }

      }




      for(let j=0; j<=data.pokemon[i][optionFiltro1].length-1;j++){
        tipoArray="";
        
        if(typeof data.pokemon[i][optionFiltro1][j] == "object"){
        
          tipo = data.pokemon[i][optionFiltro1];
          tipo = Object.values(data.pokemon[i][optionFiltro1][j]);
          tipo = tipo[0];
          for(let k=0; k<=tipo.length-1;k++){
            tipoArray=tipoArray+tipo[k];
          }
          
        }
        else{
      
          tipo = Object.values(data.pokemon[i][optionFiltro1][j]);
          
          for(let k=0; k<=tipo.length-1;k++){
            tipoArray=tipoArray+tipo[k];
          }
         
        }

        arrayProp.push(tipoArray);
      }
    }
  }
 
  
  let subcategoria= arrayProp.filter((item, index)=>{
    
    return arrayProp.indexOf(item)===index;
  });
  
  
  subcategoria.sort();
  
  
  document.getElementById("filtrodos").innerHTML="";
  for (let value in subcategoria) {
    let option = document.createElement("option");
    
    
    if ((typeof data.pokemon[value][optionFiltro1]) === "string"){

      option.text = subcategoria[value];
      option.value=subcategoria[value];
    }
    else{
      
       
        //let subsubfiltro = subcategoria.filter(function(filter){
        //  return filter[value] == "name"
        //});
        option.text = traductor(subcategoria[value]);
        option.value=subcategoria[value];
      
    }
    objFiltroDos.add(option);
    
  }

}

function filtrar() {
  const objInfoFil = filterData(data, objFiltroUno.value, objFiltroDos.value)
  var listPok = objInfoFil.map(function(pok){
    console.log(typeof pok.type);
    return '<li> <div class="boxTarjeta"><div class="boxImg"><figure><a href=pokemon.html><img src='+pok.img+'></a></figure></div><div class="boxInf"><p class="namePok">'+pok.name+'</p><p><span class="texto">Tipo:</span>'+traductor(pok.type)+' </p><p><span class="texto">Fuerte Contra:</span> '+traductor(pok.resistant)+'</p> <p> <span class="texto">Debil Contra:</span> '+traductor(pok.weaknesses)+'</p><p><span class="texto">Ataque Base:</span> '+pok.stats['base-attack']+'</p><p> <span class="texto">Defensa Base:</span> '+pok.stats['base-defense']+'</p></div></div></li>' 
  })
  document.getElementById("listPok").innerHTML = listPok.join("");

}
  

function traductor(palabra){
let palabratemp="";
 if (typeof palabra =="object"){
   for (let i=0; i<=palabra.length-1;i++){
     palabratemp=palabratemp + " " + pasarpalabra(palabra[i]);
    
  }
   return palabratemp
 }
  
 function pasarpalabra(palabra){
  switch (palabra){
    case "name": return "Nombre"
    break;
    case "num": return "Número"
    break;
    case "egg": return "Huevo"
    break;
    case "evolution": return "Evolución"
    break;
    case "quick-move": return "Movimiento rapido"
    break;
    case "resistant": return "Resistencia"
    break;
    case "special-attack": return "Ataque especial"
    break;
    case "stats": return "Estadisticas"
    break;
    case "type": return "Tipo"
    break;
    case "bug": return "Insecto"
    break;
    case "dark": return "Maligno"
    break;
    case "dragon": return "Dragón"
    break;
    case "electric": return "Electrico"
    break;
    case "fairy": return "Ada"
    break;
    case "fighting": return "Pelea"
    break;
    case "fire": return "Fuego"
    break;
    case "flying": return "Volador"
    break;
    case "ghost": return "Fantasma"
    break;
    case "grass": return "Planta"
    break;
    case "ground": return "Tierra"
    break;
    case "ice": return "Hielo"
    break;
    case "normal": return "Normal"
    break;
    case "poison": return "Veneno"
    break;
    case "psychic": return "Psiquico"
    break;
    case "rock": return "Roca"
    break;
    case "steel": return "Metal"
    break;
    case "water": return "Agua"
    break;
    case "karate chop": return "Golpe Karateca"
    break;
    case "air slash": return "Barra de Aire"
    break;
    case "astonish": return "Asombro"
    break;
    case "bite": return "Mordida"
    break;
    case "bubble": return "Ataque Burbujas"
    break;
    case "bug bite": return "Mordida de Insecto"
    break;
    case "bullet seed": return "Semilladora"
    break;
    case "charge beam": return "Rayo Carga"
    break;
    case "confusion": return "Confucion"
    break;
    case "counter": return "Golpe Contraataque"
    break;
    case "cut": return "Cortar"
    break;
    case "dragon breath": return "Drago Aliento"
    break;
    case "dragon tail": return "Cola de Dragon"
    break;
    case "ember": return "Ascuas"
    break;
    case "extrasensory": return "Paranormal"
    break;
    case "feint attack": return "Finta"
    break;
    case "fire fang": return "Colmillo Igneo"
    break;
    case "fire spin": return "Gira Fuego"
    break;
    case "frost breath": return "Aliento Gelido"
    break;
    case "fury cutter": return "Corte Furia"
    break;
    case "hex": return "Infortunio"
    break;
    case "ice shard": return "Canto Helado"
    break;
    case "infestation": return "Acoso"
    break;
    case "iron tail": return "Cola Acero"
    break;
    case "lick": return "Lamer"
    break;
    case "low kick": return "Patada Baja"
    break;
    case "metal claw": return "Garra Metal"
    break;
    case "mud shot": return "Disparo Lodo"
    break;
    case "mud slap": return "Bofeton Lodo"
    break;
    case "peck": return "Picotazo"
    break;
    case "poison jab": return "Pulla Nosiba"
    break;
    case "poison sting": return "Picotazo Venenoso"
    break;
    case "pound": return "destructor"
    break;
    case "psycho cut": return "Psico Corte"
    break;
    case "quick attack": return "Ataque Rapido"
    break;
    case "razor leaf": return "Hoja Afilada"
    break;
    case "rock smash": return "Golpe Roca"
    break;
    case "rock throw": return "Lanza Rocas"
    break;
    case "scratch": return "Arañaso"
    break;
    case "shadow claw": return "Garra Umbria"
    break;
    case "snarl": return "Alarido"
    break;
    case "spark": return "Chispa"
    break;
    case "splash": return "Salpicado"
    break;
    case "steel wing": return "Ala de Acero"
    break;
    case "struggle bug": return "Estoisismo"
    break;
    case "sucker punch": return "Golpe Bajo"
    break;
    case "tackle": return "Placaje"
    break;
    case "thunder shock": return "Impac Trueno"
    break;
    case "vine whip": return "Latigo Sepa"
    break;
    case "volt switch": return "Voltio Cambio"
    break;
    case "water gun": return "Pistola de AGua"
    break;
    case "wing attack": return "Ataque Ala"
    break;
    case "zen headbutt": return "Cabezaso"
    break; 
    case "acid": return "Ataque Acido"
    break; 
    case "bullet punch": return "Puño Bala"
    break; 
    case "hidden power": return "Poder Oculto"
    break; 
    case "powder snow": return "Nieve Polvo"
    break; 
    default: return palabra + " Sin Traducir"
   
  }
  
}
 return  pasarpalabra(palabra)
}
 
function fnBoxPuntBase(optionFiltro1){
    
  if (optionFiltro1==="stats"){
    
    document.getElementById("puntoBase").classList="visible";

  }

  else{
    document.getElementById("puntoBase").classList="invisible";
  }
}















 