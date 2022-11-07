const Paquete=require('../src/Paquete.js');

test("Crear Paquete",()=>{
    var paquete=new Paquete("Local","Destino",[["Remera",3],["Pantalon",1]],5);
    expect(paquete.ubicacionActual).toBe("Local");
    expect(paquete.destino).toBe("Destino");
    expect(paquete.productos.length).toBe(2);
    expect(paquete.urgencia).toBe(5);
})

test("Validar por lo menos un producto x paquete",()=>{
    expect(()=>{var paquete=new Paquete("Local","Destino",[],5);}).toThrow("Cada paquete debe tener por lo menos un producto");
})

test("Validar urgencia",()=>{
    expect(()=>{var paquete=new Paquete("Local","Destino",[["Remera",3]],-3);}).toThrow("La urgencia del paquete debe ser mayor a cero");
})