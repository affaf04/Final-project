const Stripe = require('../../models/stripe');
// const Item = require('../../models/item');

module.exports = {
  pay,
};

async function pay(req, res) {
  try{
    const pay = await Stripe.getPay(req.user._id);
    res.status(200).json(pay);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
