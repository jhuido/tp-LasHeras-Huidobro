const Paquete=require('../src/Paquete.js');

test("Crear Paquete",()=>{
    var paquete=new Paquete("Local","Destino",[["Remera",3],["Pantalon",1]]);
    expect(paquete.ubicacionActual).toBe("Local");
    expect(paquete.destino).toBe("Destino");
    expect(paquete.productos.length).toBe(2);
})

test("Validar por lo menos un producto x paquete",()=>{
    expect(()=>{var paquete=new Paquete("Local","Destino",[]);}).toThrow("Cada paquete debe tener por lo menos un producto");
})