const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { 
    res.send({message:'hello'});
});

router.get('/list', (req,res) => { 
    res.send({message:'localhost:8080/contact/list'});
});

module.exports = router;