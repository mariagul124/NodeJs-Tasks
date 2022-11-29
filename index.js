const express = require('express')
const app =express()
const port=3008
const path=require('path')

var dir = path.join(__dirname, 'Images');
app.use(express.static(dir));

app.get('/user', (req,res)=>
{
    res.send('Hello World')
})

app.get('/image', (req,res)=>
{
    let imagePath=path.join(__dirname,'Images','img1.jpg');
    console.log(imagePath)
    res.sendFile(imagePath)
}) 

app.get('/dynamicimage',(req,res) => {
    
    let img = req.query.image
    image = path.join(__dirname,'Images',img)
    res.sendFile(image)
    
})

app.get('/errorhandling',(req,res) => {
    try{
        let imagePath = path.join(__dirname,'Images','img1.jpg')
        console.log(imagePath)
        res.sendFile(imagePath)
    }catch(error){
        res.send("Error Occur")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

