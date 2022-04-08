const DOM = {
    firstPersonContainer: document.getElementById('firstPersonContainer'),
    personImgProfile: document.getElementById('imgProfile'),
    personUserName: document.getElementById('personUserName'),
    personUserSurname: document.getElementById('personUserSurname'),
    personCompanyEmail: document.getElementById('personCompanyEmail'),
    personPersonalEmail: document.getElementById('personPersonalEmail'),
    personCity: document.getElementById('personCity'),
    personActive: document.getElementById('personActive'),
    personCreationDate: document.getElementById('personCreationDate'),
    personFinishDate: document.getElementById('personFinishDate')
}

async function getFirstPerson() {
    let respuesta = await fetch("http://localhost:3000/personas/2");
    let persona = await respuesta.json();
    return new Persona(persona.id, persona.usuario, persona.apellidos, persona.contrasenia, persona.emailCompania,
        persona.emailPersonal, persona.ciudad, persona.activo, persona.fechaCreacion, persona.urlImagen, persona.fechaFinalizacion);
}

const setFirstPerson = () => {
    getFirstPerson().then(persona => {
        DOM.personImgProfile.src = persona.urlImagen;
        DOM.personImgProfile.alt = "Imagen de " + persona.usuario;
        DOM.personUserName.innerHTML = persona.usuario;
        DOM.personUserSurname.innerHTML = persona.apellidos;
        DOM.personCompanyEmail.innerHTML = persona.emailCompania;
        DOM.personPersonalEmail.innerHTML = persona.emailPersonal;
        DOM.personCity.innerHTML = persona.ciudad;
        persona.activo ? DOM.personActive.innerHTML = "Activo" : DOM.personActive.innerHTML = "Inactivo";
        DOM.personCreationDate.innerHTML = persona.fechaCreacion;
        DOM.personFinishDate.innerHTML = persona.fechaFinalizacion;
    })
}

window.onload = () => {
    setFirstPerson();
}
