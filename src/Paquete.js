

function Paquete(destino,productos){
    this.destino=destino;
    this.productos=productos;

    this.ubicacion=function(){
        return "Local";
    }
}

module.exports=Paquete;