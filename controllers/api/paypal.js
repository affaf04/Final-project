

const paypalService = require('../../src/utilities/payment-api');

module.exports = {
  generateAccessToken,
  checkout,
};



// async function generateAccessToken (req, res)  {
//   try {
//     const accessToken = await paypalService.generateAccessToken();
//     res.json({ accessToken });
//   } catch (error) {
//     console.error('Error generating PayPal access token:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// async function checkout(req, res) {
//   try{
//     const pay = await Pay.getCart(req.user._id);
//     pay.isPaid = true;
//     await pay.save();
//     res.status(200).json(pay);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }

