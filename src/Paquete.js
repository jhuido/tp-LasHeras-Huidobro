

function Paquete(destino,productos){
    if(productos.length==0){
        throw new Error("Cada paquete debe tener por lo menos un producto");
    }
    
    this.destino=destino;
    this.productos=productos;

    this.ubicacion=function(){
        return "Local";
    }
}

module.exports=Paquete;