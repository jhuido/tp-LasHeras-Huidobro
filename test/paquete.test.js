const Paquete=require('../src/Paquete.js');

test("Crear Paquete",()=>{
    var paquete=new Paquete("Destino");
    expect(paquete.ubicacion()).toBe("Local");
    expect(paquete.destino).toBe("Destino");
})