const express = require('express');
const router = express.Router();

const Cart = require('../model/cart');

// => localhost:3200/cart/

router.get('/', (req, res) => {
    res.send("From API ROUTE")
  })
  router.post('/', (req, res) => {
    let cartData = req.body
    let cart = new Cart(cartData)
    console.log(req.body)
    cart.save((error, cart) => {
      if(error){
        console.log("Error: "+ error)
      }
      else{
        res.status(200).send(cart)
      }
    })
  })
  
module.exports = router
