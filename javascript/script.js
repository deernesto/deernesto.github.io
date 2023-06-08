window.addEventListener('load', () => {
  const form = document.getElementById("form")
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const mensaje = document.getElementById("mensaje")
  const enviar = document.getElementById('enviar')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(validacampos()){
        form.submit();
    }
}) 

const validacampos = ()=> {
    let camposok = true;
    const namevalor = name.value.trim()
    const emailvalor = email.value.trim()
    const mensajevalor = mensaje.value.trim()


    if(!namevalor){
        
       console.log('campo vacio')
       validafalla(name,'box empty')
       

       }else{
        
         validaok(name);
        }

        
    if(!mensajevalor){
        camposok = false;
        validafalla(mensaje, 'box empty' )
       
    }else{

        validaok(mensaje);
    }



    if(!emailvalor){
        camposok = false;
        validafalla(email,'box empty')
        
    }else if(!emailvalor.match(validaemail)) {
        camposok = false;
        validafalla(email, 'e-mail invalid')
       
    }else{

        validaok(email);
    }

    return camposok;

  };

  const validafalla = (input, msje) => {
    const formcontrol = input.parentElement
    const aviso = formcontrol.querySelector('p')
    aviso.innerText = msje

    formcontrol.className = 'form-control falla'
};

const validaok = (input) => {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control ok';
}





const validaemail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


})


const enviar = document.getElementById('enviar')


enviar.addEventListener('mousedown', () => {
    enviar.classList.replace('enviar','tamaño')
    console.log('enviar')
   
}) 

enviar.addEventListener('mouseup', () => {
    enviar.classList.replace('tamaño','enviar' )
    console.log('enviar')
   
})




const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");


 
abrir.addEventListener('click', () => {
    nav.classList.add("visible")
 
   
}) 

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible")
 
   
})

document.addEventListener('click', (e) => {
    let target = e.target;
    if(!nav.contains(target) && !abrir.contains(target)){
        nav.classList.remove("visible");
        
    }
 
   
})

const scroll1 = document.getElementById("scroll1");

window.addEventListener("scroll",() =>{
    let pantalla = window.innerHeight/2;

    
    let ubicacionobjeto = scroll1.getBoundingClientRect().top;
    
    console.log(pantalla,ubicacionobjeto)

    if(ubicacionobjeto <= pantalla) {
        scroll1.classList.add("sobremi2")
        
    }else{
        scroll1.classList.remove("sobremi2")
        


    }if(ubicacionobjeto <= -418) {
        scroll1.classList.remove("sobremi2")}
})