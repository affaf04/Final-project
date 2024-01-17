import sendRequest from './send-request';

  const BASE_URL = 'https://api.stripe.com';


  export function payment() {
    // Send a POST request to your server with the payment token
    return sendRequest(`${BASE_URL}/cart/checkout/payment`, 'POST');
  }
