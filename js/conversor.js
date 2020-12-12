/*!
function moneda(){
    
    this.nombre
    this.tipoDeCambio
    
    
    
    this.convertir = function(monto){
        
        conversionResultado = monto * this.tipoDeCambio
     
        document.getElementById('resultadoDelCambio').innerHTML = conversionResultado 
    
        
        
    }
}


var peso = new moneda()
    peso.nombre = "Pesos"
    peso.tipoDeCambio = 734.30

    
function convertirMoneda(){
    
    var montoSeleccionado = document.getElementById('monto').value
    
    peso.convertir(montoSeleccionado)
    
    
}

*/

//Consumir API mindicador.cl
$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open ('GET','https://mindicador.cl/api',true);
    xmlHttp.send();

    var uf = 0;
    var dolar = 0;
    var euro = 0;

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            uf = data.uf.valor;
            dolar = data.dolar.valor;
            euro = data.euro.valor;
        }
        document.getElementById("valorUF").innerHTML = "Valor actual " + data.uf.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(uf);
        document.getElementById("valorDolar").innerHTML = "Valor actual " + data.dolar.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dolar);
        document.getElementById("valorEuro").innerHTML = "Valor actual " + data.euro.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(euro);
    };
});