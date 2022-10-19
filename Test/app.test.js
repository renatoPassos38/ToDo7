const ServiceConta = require("../Service/serviceContas.js")

test("Qual o valor da soma", ()=>{
    expect(ServiceConta.somar(9,9)).toBe(18)
})

test("Qual o valor da subtrair", ()=>{
    expect(ServiceConta.subtrair(10,5)).toBe(5)
})


