const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita');

// crear la estructura para guardar datos

const citasObj ={
    mascota:'',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas:''
}

// eventos

eventos();

function eventos(){

    mascotaInput.addEventListener('input',datosCita)
    propietarioInput.addEventListener('input',datosCita)
    telefonoInput.addEventListener('input',datosCita)
    fechaInput.addEventListener('input',datosCita)
    horaInput.addEventListener('input',datosCita)
    sintomasInput.addEventListener('input',datosCita)
    formulario.addEventListener('submit',nuevaCita)
    

}

function datosCita(e){
  //console.log(e.target.value)
  citasObj[e.target.name] = e.target.value
  //console.log(citasObj);
}

function nuevaCita(e){
    e.preventDefault();

  //  console.log(citasObj)
  
  const{mascota,propietario,telefono,fecha,hora,sintomas} = citasObj

  //validacion, que todos los campos deverian ser obligatorios

if(mascota==='' || propietario==='' || telefono==='' || fecha==='' || hora==='' || sintomas==='' ){
    console.log('todos los campos son obligatorios')
}else{
    console.log("campos llenos")
    citasObj.id = Date.now();
    console.log(citasObj)
    formulario.reset();
}



}




