const express = require('express'); 
const path = require('path'); 
const cors = require('cors'); 


const app = express(); 
app.use(cors()); 

const contactRouter = require('./routers/contact');


app.use('/contact',contactRouter);

app.get('/', (req,res) => {
  res.send({message:'hello'});
});

app.listen(5000, ()=>{
  console.log('server is running on 8080')
})