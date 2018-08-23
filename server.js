const express = require ('express');
const app = express();

const path = require ('path');
app.use (express.static(path.join(__dirname,'weather/dist/weather')));

app.all ('*',(req,res,next)=>{
    res.sendFile(path.resolve('./weather/dist/weather/index.html'))
});

app.listen(8000);
