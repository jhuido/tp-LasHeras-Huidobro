

function Paquete(destino){
    this.destino=destino;
    
    this.ubicacion=function(){
        return "Local";
    }
}

module.exports=Paquete;