module.export = (app) => {
    app.get('/status',(req, res) =>{
        res.send({
            message: 'hello world'
        })
    })
    
    app.post('/register',(req, res) =>{
        res.send({
            message: `Hello ${req.body.email}! Your user was registerd! Have fun`
        })
    })
}