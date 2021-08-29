
//domain/.netlify/functions/create-payment-intent

/* const items = [
    {id: 1, name: 'john'},
    {id:2, name:'susan'}
] */
require('dotenv').config()


const stripe = require('stripe')(process.env.REACT_APP_AUTH_STRIPE_SECRET_KEY_TEST)





exports.handler = async function(event, context) {
    if(event.body){
        const {cart,shipping_fee,total_amount} = JSON.parse(event.body)
      
     const calculateOrderAmount = () => {
         return shipping_fee + total_amount
     }
    
       try {
           const paymentIntent = await stripe.paymentIntents.create({
               amount:calculateOrderAmount(),
               currency:'inr'
           })
           return {
               statusCode: 200,
               body: JSON.stringify({clientSecret:paymentIntent.client_secret})
           }
       } catch (error) {
           return {
               statusCode:500,
               body: JSON.stringify({msg:error.message}),
           }
       }
    }
    return {
        statusCode:200,
        body: 'create payment intent',
    }
    
    }