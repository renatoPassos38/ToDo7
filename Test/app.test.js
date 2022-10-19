const ServiceConta = require("../Service/serviceContas.js")

test("Qual o valor da soma", ()=>{
    expect(ServiceConta.somar(9,9)).toBe(18)
})

test("Qual o valor da subtrair", ()=>{
    expect(ServiceConta.subtrair(10,5)).toBe(5)
})

test("Qual o valor da multiplicar", ()=>{
    expect(ServiceConta.multiplicar(6,6)).toBe(36)
})

test("Qual o valor da dividir", ()=>{
    expect(ServiceConta.dividir(25,5)).toBe(5)
})

test("Qual o valor da soma", ()=>{
    expect(ServiceConta.somar(10,10)).toBe(20)
})

test("Qual o valor da subtrair", ()=>{
    expect(ServiceConta.subtrair(100,50)).toBe(50)
})

test("Qual o valor da multiplicar", ()=>{
    expect(ServiceConta.multiplicar(9,9)).toBe(81)
})

test("Qual o valor da dividir", ()=>{
    expect(ServiceConta.dividir(10,2)).toBe(5)
})
