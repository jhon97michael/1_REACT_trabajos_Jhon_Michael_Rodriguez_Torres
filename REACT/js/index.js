const tvreact = document.querySelector(".react");

function freact(e){
    console.log("React");
}

tvreact.addEventListener("click", freact);

const angular = document.querySelector(".angular");

function fangular(e){  
    console.log("Angular");
}

angular.addEventListener("click", fangular);

const tvVue = document.querySelector(".vue");

function fvue(e){
    console.log("Vue");
}

tvVue.addEventListener("click", fvue);

const semejanzasElement = document.querySelector(".semejanzas");

function handleMousemove(e) {
    console.log("semejanzas");
}

semejanzasElement.addEventListener("mousemove", handleMousemove);

const btinicio = document.querySelector(".getStart")

function blurbtn(e){
    console.log("Blur Boton");
}
btinicio.addEventListener("onblur", blurbtn);