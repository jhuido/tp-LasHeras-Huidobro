const Paquete=require('../src/Paquete.js');

test("Crear Paquete",()=>{
    var paquete=new Paquete();
    expect(paquete.ubicacion()).toBe("Local");
})