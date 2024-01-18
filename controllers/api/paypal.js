

const paypalService = require('../../src/utilities/payment-api');

module.exports.generateAccessToken = async (req, res) => {
  try {
    const accessToken = await paypalService.generateAccessToken();
    res.json({ accessToken });
  } catch (error) {
    console.error('Error generating PayPal access token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


