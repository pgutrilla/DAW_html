 
 // Esta funcion calcula el porcentaje de un valor, pasandole el valor y el % a calcular
function getPorcentaje( valor ,tantoPorciento ){
    var multiplicador = tantoPorciento / 100;
    return Math.round(valor * multiplicador);
}

// Espero a que carge el html para iniciar la ejecución
function fmc(edad){
    
    // Calculo el FMC = 220 - edad
    var fmc = 220 - edad; 
    
    // Recogo los li que almacenaran los datos calculados e introduzco estos en su contenido
    var ul = document.getElementById("fmc-ul");
    var arrLi = ul.childNodes;
    
    // 60%-70%
    arrLi[0].textContent += getPorcentaje(fmc, 60) + " - " + getPorcentaje(fmc, 70) + " pulsaciones";
    // 70%-80%
    arrLi[1].textContent += getPorcentaje(fmc, 70) + " - " + getPorcentaje(fmc, 80) + " pulsaciones";
    // 80%-90%
    arrLi[2].textContent += getPorcentaje(fmc, 80) + " - " + getPorcentaje(fmc, 90) + " pulsaciones";
    // 90%-100%
    arrLi[3].textContent += getPorcentaje(fmc, 90) + " - " + getPorcentaje(fmc, 100) + " pulsaciones";
    
}

 