const Order = require('../../models/order');
// const fetch = require('node-fetch');


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history,
  // generateAccessToken,
  // createOrder,
  // captureOrder,
};


// A cart is the unpaid order for a user
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an item to the cart
async function addToCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try{
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
    res.status(200).json(orders);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
// const generateAccessToken = async () => {
//   try {
//     const clientId = process.env.PAYPAL_CLIENT_ID;
//     const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

//     const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
//     const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
//       method: 'POST',
//       body: 'grant_type=client_credentials',
//       headers: {
//         Authorization: `Basic ${auth}`,
//       },
//     });

//     const data = await response.json();
//     return data.access_token;
//   } catch (error) {
//     console.error('Failed to generate Access Token:', error);
//   }
// };
// async function createOrder(req, res) {
//   try {
//     const { lineItems, totalAmount } = req.body;
//     const { jsonResponse, httpStatusCode } = await createPayPalOrder(lineItems, totalAmount);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to create order:", error);
//     res.status(500).json({ error: "Failed to create order." });
//   }
// }

// async function captureOrder(req, res) {
//   try {
//     const { orderID } = req.params;
//     const { jsonResponse, httpStatusCode } = await capturePayPalOrder(orderID);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to capture order:", error);
//     res.status(500).json({ error: "Failed to capture order." });
//   }
// }