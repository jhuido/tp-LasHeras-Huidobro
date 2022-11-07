

function Paquete(ubicacionActual,destino,productos){
    if(productos.length==0){
        throw new Error("Cada paquete debe tener por lo menos un producto");
    }

    this.ubicacionActual=ubicacionActual;
    this.destino=destino;
    this.productos=productos;

}

module.exports=Paquete;