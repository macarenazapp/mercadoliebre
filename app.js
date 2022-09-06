const express = require('express'); // por convención se llama express
const app= express() 



const path = require('path');
app.use( express.static(path.join(__dirname, '/public')));
app.listen(process.env.PORT || 3000, function() {console.log('Esto fue exitoso');}) 



app.get('/', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath)
    
}
)


app.get('/style.css', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/css.css')
    res.sendFile(htmlPath)
    
}
)

app.get('/login.css', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/login.css')
    res.sendFile(htmlPath)
    
}
)

app.get('/register.css', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/register.css')
    res.sendFile(htmlPath)
    
}
)


app.get('/moulinex.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/img-cafetera-moulinex.jpg') 
    res.sendFile(htmlPath)
    
}
)

app.get('/banner.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/img-home-banner.jpg')  
    res.sendFile(htmlPath)
    
}
)

app.get('/macbook.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/img-macbook-pro-2019.jpg')  
    res.sendFile(htmlPath)
    
}
)

app.get('/samsung.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/img-samsung-galaxy-s10.jpg')  
    res.sendFile(htmlPath)
    
}
)

app.get('/tv.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/img-tv-samsung-smart.jpg') 
    res.sendFile(htmlPath)
    
}
)

app.get('/logo.jpg', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './public/images/logo-mercado-liebre.svg') 
    res.sendFile(htmlPath)
    
}
)

app.get('/login', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './views/login.html')
    res.sendFile(htmlPath)
    
}
)

app.get('/register', (req,res)=>{
    let htmlPath= path.resolve(__dirname, './views/register.html')
    res.sendFile(htmlPath)
    
}
)