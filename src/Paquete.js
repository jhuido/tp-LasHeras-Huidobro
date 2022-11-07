

function Paquete(ubicacionActual,destino,productos,urgencia){
    if(productos.length==0){
        throw new Error("Cada paquete debe tener por lo menos un producto");
    }

    this.ubicacionActual=ubicacionActual;
    this.destino=destino;
    this.productos=productos;
    this.urgencia=urgencia;

}

module.exports=Paquete;