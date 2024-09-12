import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import express from 'express';
 


const app=express();

app.get('/',(req, res) => {
res.send('hello world')
})

app.get('/twitter', (req,res)=> {
    res.send('hiteshdotcom')
})

app.get('/login', (req,res) => {
      res.send('<h1> please log in at backend </h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2> Backend</h2>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});