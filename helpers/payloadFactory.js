const itemFactory = require('./itemFactory.js');

const payload = (inputData) => {
  const body = {
    external_id: inputData.external_order_id,
    sender_id: inputData.sender_id,
    steps: [],
    items: [],
    item_steps: [],
    price_amount: inputData.order_price_amount,
    price_currency: inputData.order_currency,
    sender_type: 'organisation',
    container_no: '',
  };

  inputData.items.forEach((items) => {
    body.items.push(itemFactory(items));
  });

  // Pickup Step
  body.steps.push({
    address: inputData.pickup_address,
    address2: inputData.pickup_address2,
    country: inputData.pickup_country,
    state: inputData.pickup_state,
    postal_code: inputData.pickup_postal_code,
    contact_company: inputData.pickup_contact_company,
    contact_name: inputData.pickup_contact_name,
    contact_phone: inputData.pickup_contact_phone,
    contact_email: inputData.pickup_contact_email,
    from_time: inputData.pickup_from_time,
    to_time: inputData.pickup_to_time,
  });

  // Dropoff Step
  body.steps.push({
    address: inputData.dropoff_address,
    address2: inputData.dropoff_address2,
    country: inputData.dropoff_country,
    state: inputData.dropoff_state,
    postal_code: inputData.dropoff_postal_code,
    contact_company: inputData.dropoff_contact_company,
    contact_name: inputData.dropoff_contact_name,
    contact_phone: inputData.dropoff_contact_phone,
    contact_email: inputData.dropoff_contact_email,
    from_time: inputData.dropoff_from_time,
    to_time: inputData.dropoff_to_time,
  });

  body.item_steps.push({
    "type": "pickup",
    "order_step_id": 0,
    "item_id": 0,
  });

  body.item_steps.push({
    "type": "dropoff",
    "order_step_id": 1,
    "item_id": 0,
  });

  return body;
}

module.exports = payload;