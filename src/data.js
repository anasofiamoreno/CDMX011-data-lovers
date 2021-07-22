export function filterData(data, filtroUno, filtroDos){

let evolution;

  let objDataFilt =  data && data.pokemon.filter(function(data) {
    
    if(typeof data[filtroUno] == "object"){

      if(typeof data[filtroUno].length == "undefined"){ 
        
        if(parseInt(data[filtroUno][filtroDos]) >= parseInt(document.getElementById("nivel").value)){
          return true
        }
        
         //console.log(data.evolution["next-evolution"][0].name);
         //console.log(Object.values(data.evolution["next-evolution"]));
          if(Object.prototype.hasOwnProperty.call(data.evolution,filtroDos)){
            if(data.name=="wartortle"){
              evolution = data.evolution[filtroDos][0].name;
              console.log(evolution);
            }
          }
          //console.log("Condicion "+ data.name +  " " + evolution);
          if(data.name===evolution){
            console.log("yes");
            return true
          }
          

      }


      for(let i=0; i<=data[filtroUno].length-1; i++){
        
        
        if(typeof data[filtroUno][i] == "object"){
          if(data[filtroUno][i]["name"] == filtroDos){
            return true
          }
          
        }
        else{
          if(data[filtroUno][i] == filtroDos){
            return true
          }
        }

      }
    }
    else{
      return data[filtroUno] == filtroDos
    }
  });

 
 /*
  for (let i=0; i<=data.pokemon.length -1; i++){

    if ((data.pokemon[i][filtroUno][0]==filtroDos)||(data.pokemon[i][filtroUno][1]==filtroDos)){
      console.log(data.pokemon[i].name);
    }
    
    et objDataFilt= data.pokemon[i][filtroUno];
  }
   
  var descriptionPok= data.pokemon.find(pokemon => pokemon.name === "charizard");
  */

  return objDataFilt
}


export const sortData=(data, objFilAlfabNum, objFilAscDsc)=>{
  
   if(objFilAlfabNum==="Alfabetico")  {
     if (objFilAscDsc==="Ascendente"){
       return data.sort((a, b) => a["name"].localeCompare(b["name"]))
     }
      else{
        return data.sort((a, b) => b["name"].localeCompare(a["name"]))
      }
   }

   else{
    if (objFilAscDsc==="Ascendente"){
      return data.sort((a, b) => a["num"].localeCompare(b["num"]))
    }
     else{
       return data.sort((a, b) => b["num"].localeCompare(a["num"]))
     }

   }
}

export const fnFiltradoTipo = (data2) => {
  
  //respuesta = respuesta + data['pokemon'][i]['type'];
  
  //console.log(Object.keys(data.pokemon[0].name));
  console.log(data2);

  
  
  //return respuesta;
 
};

