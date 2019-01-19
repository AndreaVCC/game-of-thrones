 // MOSTRANDO DATA CAPITULOS 


 const data2 = (EPISODES.episodes)
 const containerRoot2 = document.getElementById('root2');
const mostrarData2 = (data2) => {
 let result2 = ''; 
 data2.forEach(element2 => {   
   result2 = containerRoot2.innerHTML += `
   <div class="card">
  
   <div class="card-content">
     <span class="card-title activator grey-text text-darken-4">
     <p clas="nombreepisodio"><h6>${element2.episodeTitle}</h6></p>
     <p>Capítulo ${element2.episodeNum} - Temporada ${element2.seasonNum}</p>
     </span>
   </div>
 
   <div class="card-contentIcon">
   <i class="material-icons activator">more_horiz</i>
   </div>
   <div class="card-reveal">
   <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
     <p>${element2.episodeDescription}</p>
   </div>
 </div>
    `
 }
 );
 return result2;
 }
 window.onload = mostrarData2(data2);



   /*INICIALIZA EL MATERIALIZE*/
   document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });