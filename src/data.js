
export const filterData = (data, filtroUno, filtroDos, filtroTres) => {
 
   let evolution;
   
  if(filtroUno==="evolution"){
    data.pokemon.filter(function(data){
     
      if(Object.prototype.hasOwnProperty.call(data.evolution,filtroDos)){
      
        if(data.name==filtroTres){
          evolution = data.evolution[filtroDos][0].name;
          
       }
     }
    });
  }

  const objDataFilt =  data.pokemon.filter(function(data) {

    if(typeof data[filtroUno] == "object"){
     
      if(typeof data[filtroUno].length == "undefined"){ 
       
        
        if(parseInt(data[filtroUno][filtroDos]) >= parseInt(document.getElementById("nivel").value)){
          
          return true
        }
       
        
        
         
          if(data.name===evolution){
           
            return true
       
          }
        
      }


      for(let i=0; i<=data[filtroUno].length-1; i++){
        
        
        if(typeof data[filtroUno][i] == "object"){ 
          if(data[filtroUno][i]["name"] == filtroDos){ //para filtrar por movimiento rapido y ataque especial
           
            return true
          }
          
        }
        else{
          if(data[filtroUno][i] == filtroDos){ //filtro para resistencia y debilidad
            
            return true
          }
        }

      }
    }
    else{
      
      return data[filtroUno] == filtroDos //filtrar por nombre y numero

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
};


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
