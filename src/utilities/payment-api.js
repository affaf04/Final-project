// require("dotenv").config();

// exports.generateAccessToken = async () => {
//   try {
//     const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');
//     const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${auth}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: 'grant_type=client_credentials',
//     });

//     const data = await response.json();
//     return data.access_token;
//   } catch (error) {
//     console.error('Failed to generate PayPal Access Token:', error);
//     throw error;
//   }
// };

