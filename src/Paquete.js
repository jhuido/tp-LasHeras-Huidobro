

function Paquete(ubicacionActual,destino,productos,urgencia){

    validarParametros();

    this.ubicacionActual=ubicacionActual;
    this.destino=destino;
    this.productos=productos;
    this.urgencia=urgencia;

    function validarParametros(){
        if(productos.length==0){
            throw new Error("Cada paquete debe tener por lo menos un producto");
        }
        if(urgencia<0){
            throw new Error("La urgencia del paquete debe ser mayor a cero");
        }
    }

}

module.exports=Paquete;