//Creo una Variable para entrar y guardar la data
const data = (DATA.characters)
//console.log(data)

//Aqui se guardara todo                   Se llama root del HTML
const containerRoot = document.getElementById('root');

// MOSTRANDO DATA PERSONAJES 
  const mostrarData = (data) => {
    let result = ''; 
    data.forEach(element => {   
      result = containerRoot.innerHTML += `
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <div class="img1"><img class="activator" src="${element.characterImageFull}" alt=""></div>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"><h6>${element.characterName}</h6></span>
      </div>
      <div class="card-contentIcon">
      <i class="material-icons activator">add_circle_outline</i>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
       `
    }
    );
    return result;
    }
    window.onload = mostrarData(data);



   









     /*INICIALIZA EL MATERIALIZE*/
   document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });