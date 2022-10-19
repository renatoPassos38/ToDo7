const ServiceConta = require ("../Service/serviceContas.js")
class Contas {
    static router(app){
        app.get("/somar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.somar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/subtrair",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.subtrair(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/multiplicar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.multiplicar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/dividir",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.dividir(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
    }
}

module.exports=Contas
