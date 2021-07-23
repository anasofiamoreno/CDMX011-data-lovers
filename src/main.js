
import data from './data/pokemon/pokemon.js';
import { sortData } from './data.js';
import {filterData} from './data.js';


const objFiltroDos = document.getElementById("filtrodos");
const objFiltroUno = document.getElementById("filtrouno");
const objfiltroName=document.getElementById("FindNomNumber");
let   objFilAlfabNum=document.getElementById("AlfNum");
const objFilAlfabNumRes=document.getElementById("AlfNumRes");
let objFilAscDsc=document.getElementById("OrdAscDesc");
const objFilAscDscRes=document.getElementById("OrdAscDescRes");
const objFilTres=document.getElementById("filtroTres");



document.getElementById("filtrouno").addEventListener("change", addPropFiltro2);
document.getElementById("btnbuscar").addEventListener("click",filtrar);
document.getElementById("filtrodos").addEventListener("change", filtrar);
objfiltroName.addEventListener("keyup", fnfilNamNum);
document.getElementById("AlfNum").addEventListener("change",filtrar);
document.getElementById("AlfNumRes").addEventListener("change",filtrar);
document.getElementById("OrdAscDesc").addEventListener("change", filtrar);
document.getElementById("filtroTres").addEventListener("change",filtrar);



var propertyFiltro1= Object.keys(data.pokemon[0]) //recuperamos propiedades para llenar filtro1

    
propertyFiltro1 = propertyFiltro1.filter(function(exc) { // filtramos para quitar propiedades que no van en filtro
  if(exc != 'size' && exc != 'img'  && exc != 'about'&& exc != 'generation' && exc != 'pokemon-rarity' && exc != 'encounter' && exc != 'spawn-chance' && exc  != 'buddy-distance-km'){
    return true
  }
 
});

     addOptions(propertyFiltro1); //llenamos Categoria
     addPropFiltro2(); //llenamos subcategoria
     filtrar(); 



function addOptions(prop) { 

  for (let value in prop) {
    var option = document.createElement("option");
    option.text = traductor(prop[value]);
    option.value=prop[value];
    objFiltroUno.add(option);
   
  }
  
}

function addPropFiltro2() { 

  let optionFiltro1= objFiltroUno.value;
  
  let tipo;
  let tipoArray="";
  let arrayProp=[];

  if (optionFiltro1==="evolution"){
    document.getElementById("filtroTres").classList="visibleFilTres";
    for(let value in data.pokemon) {
    var option = document.createElement("option");
    option.text = data.pokemon[value]["name"];
    objFilTres.add(option);
    }
  }
  else{
    document.getElementById("filtroTres").classList="invisible"; 
  }

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
 
  
  let subcategoria= arrayProp.filter((item, index)=>{ //quita duplicidad
    
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
      
        option.text = traductor(subcategoria[value]);
        option.value=subcategoria[value];
      
    }
    
    if(option.text!="candy Sin Traducir"){
      objFiltroDos.add(option);
    }
    
    
  }

}

function filtrar() {
  const objInfoFil = filterData(data, objFiltroUno.value, objFiltroDos.value, objFilTres.value);
  //objFilAlfabNum=objFilAlfabNumRes;
  //objFilAscDsc=objFilAscDscRes;
  const objInfFilOrg= sortData(objInfoFil,objFilAlfabNum.value,objFilAscDsc.value);
  
  var listPok = objInfFilOrg.map(function(pok){
    
    return '<li> <div class="boxTarjeta"><div class="boxImg"><figure><a href=pokemon.html><img src='+pok.img+'></a></figure></div><div class="boxInf"><p class="namePok">'+"No."+Number(pok.num)+"&nbsp;&nbsp;"+pok.name+'</p><p><span class="texto">Tipo:</span>'+traductor(pok.type)+' </p><p><span class="texto">Fuerte Contra:</span> '+traductor(pok.resistant)+'</p> <p> <span class="texto">Debil Contra:</span> '+traductor(pok.weaknesses)+'</p><p><span class="texto">Ataque Base:</span> '+pok.stats['base-attack']+'</p><p> <span class="texto">Defensa Base:</span> '+pok.stats['base-defense']+'</p></div></div></li>' 
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
   
    case "num": return "Número"
    case "egg": return "Huevo"
    
    case "evolution": return "Evolución"
   
    case "quick-move": return "Movimiento rapido"
   
    case "resistant": return "Resistencia"
    
    case "special-attack": return "Ataque especial"
    
    case "stats": return "Estadisticas"
   
    case "type": return "Tipo"
   
    case "bug": return "Insecto"
    
    case "dark": return "Maligno"
  
    case "dragon": return "Dragón"
    
    case "electric": return "Electrico"
    
    case "fairy": return "Ada"
 
    case "fighting": return "Pelea"
   
    case "fire": return "Fuego"

    case "flying": return "Volador"

    case "ghost": return "Fantasma"

    case "grass": return "Planta"

    case "ground": return "Tierra"

    case "ice": return "Hielo"
  
    case "normal": return "Normal"

    case "poison": return "Veneno"

    case "psychic": return "Psiquico"
 
    case "rock": return "Roca"

    case "steel": return "Metal"
  
    case "water": return "Agua"

    case "karate chop": return "Golpe Karateca"

    case "air slash": return "Barra de Aire"
   
    case "astonish": return "Asombro"
  
    case "bite": return "Mordida"
 
    case "bubble": return "Ataque Burbujas"
   
    case "bug bite": return "Mordida de Insecto"

    case "bullet seed": return "Semilladora"

    case "charge beam": return "Rayo Carga"
  
    case "confusion": return "Confucion"
  
    case "counter": return "Golpe Contraataque"
   
    case "cut": return "Cortar"
 
    case "dragon breath": return "Drago Aliento"

    case "dragon tail": return "Cola de Dragon"

    case "ember": return "Ascuas"
 
    case "extrasensory": return "Paranormal"

    case "feint attack": return "Finta"

    case "fire fang": return "Colmillo Igneo"

    case "fire spin": return "Gira Fuego"
  
    case "frost breath": return "Aliento Gelido"
 
    case "fury cutter": return "Corte Furia"

    case "hex": return "Infortunio"
  
    case "ice shard": return "Canto Helado"
 
    case "infestation": return "Acoso"

    case "iron tail": return "Cola Acero"

    case "lick": return "Lamer"

    case "low kick": return "Patada Baja"

    case "metal claw": return "Garra Metal"
  
    case "mud shot": return "Disparo Lodo"

    case "mud slap": return "Bofeton Lodo"

    case "peck": return "Picotazo"

    case "poison jab": return "Pulla Nosiba"
 
    case "poison sting": return "Picotazo Venenoso"

    case "pound": return "destructor"

    case "psycho cut": return "Psico Corte"

    case "quick attack": return "Ataque Rapido"

    case "razor leaf": return "Hoja Afilada"

    case "rock smash": return "Golpe Roca"

    case "rock throw": return "Lanza Rocas"

    case "scratch": return "Arañaso"

    case "shadow claw": return "Garra Umbria"

    case "snarl": return "Alarido"

    case "spark": return "Chispa"

    case "splash": return "Salpicado"

    case "steel wing": return "Ala de Acero"

    case "struggle bug": return "Estoisismo"

    case "sucker punch": return "Golpe Bajo"

    case "tackle": return "Placaje"

    case "thunder shock": return "Impac Trueno"

    case "vine whip": return "Latigo Sepa"

    case "volt switch": return "Voltio Cambio"

    case "water gun": return "Pistola de AGua"
 
    case "wing attack": return "Ataque Ala"

    case "zen headbutt": return "Cabezaso"

    case "acid": return "Ataque Acido"

    case "bullet punch": return "Puño Bala"

    case "hidden power": return "Poder Oculto"

    case "powder snow": return "Nieve Polvo"

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

function fnfilNamNum(){
  
  let objInfoFil = filterData(data, "name", objfiltroName.value);
 
  if (typeof objInfoFil[0]==="undefined"){
    objInfoFil = filterData(data, "num", objfiltroName.value);
  }
  var listPok = objInfoFil.map(function(pok){
    return '<li> <div class="boxTarjeta"><div class="boxImg"><figure><a href=pokemon.html><img src='+pok.img+'></a></figure></div><div class="boxInf"><p class="namePok">'+pok.name+'</p><p><span class="texto">Tipo:</span>'+traductor(pok.type)+' </p><p><span class="texto">Fuerte Contra:</span> '+traductor(pok.resistant)+'</p> <p> <span class="texto">Debil Contra:</span> '+traductor(pok.weaknesses)+'</p><p><span class="texto">Ataque Base:</span> '+pok.stats['base-attack']+'</p><p> <span class="texto">Defensa Base:</span> '+pok.stats['base-defense']+'</p></div></div></li>' 
  })
  document.getElementById("listPok").innerHTML = listPok.join("");
} 



















 