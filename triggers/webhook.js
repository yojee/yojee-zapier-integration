const perform = async (z, bundle) => {
  z.console.log("perform bundle:", JSON.stringify(bundle, null, 2));
  z.console.log("perform bundle.cleanedRequest:", JSON.stringify(bundle.cleanedRequest, null, 2));
  return [bundle.cleanedRequest];
};

const sample = {
  company_slug: 'mplus',
  created_at: 1631692757,
  data: {
    cancelled_at: null,
    completion_time: null,
    container_no: null,
    display_price: null,
    external_id: 'CW-TST-2021-LGAZNT90',
    id: 416202,
    inserted_at: '2021-09-15T07:59:16.966537Z',
    number: 'O-PLGIW15W4EYO',
    order_items: [
      {
        external_customer_id: 'CW-REF-2021-LGAZNT90',
        external_customer_id2: null,
        external_customer_id3: 'Seal: undefined\n Second Seal: undefined',
        id: 440065,
        inserted_at: '2021-09-15T07:59:16.982925Z',
        item: {
          description: 'LSE BARE BOARD,  CTN ',
          global_tracking_number: 'Y-I1OZSDAONUYE',
          height: null,
          id: 439159,
          length: null,
          payload_type: 'Carton',
          quantity: 3,
          volume: '0.108',
          volumetric_weight: '0.00',
          weight: '25',
          width: null,
        },
        price: null,
        service_type: 'export_lcl/lse/ltl_pickup',
        status: 'created',
        tracking_number: 'YOJ-LS7FJ5C76DNP',
        transfer_info: null,
      },
    ],
    price: null,
    sender: {
      id: 2033,
      name: null,
      organisation_name: 'KCY CW1 Corp',
      type: 'organisation',
    },
    status: 'accepted',
  },
  event_type: 'order.created',
  id: '3a715d98-cd79-4b8b-b018-1b53e3128193',
  webhook_id: 250,
  yojee_instance: 'https://umbrella-dev.yojee.com',
};

const performList = async (z, bundle) => {
  return [sample];
};

const performSubscribe = async (z, bundle) => {
  z.console.log("performSubscribe bundle:", JSON.stringify(bundle, null, 2));
  const options = {
    url: `${process.env.YOJEE_API_URL}/api/v3/dispatcher/webhooks`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      access_token: bundle.authData.access_token,
      company_slug: bundle.authData.company_slug,
    },
    params: {},
    body: {
      url: bundle.targetUrl,
      events: [
        'sender.created',
        'task.accepted',
        'task.reassigned',
        'task.completed',
        'task.failed',
        'driver.arrived',
        'driver.departed',
        'order.created',
        'order_item.cancelled',
        'task.transferred',
        'order.transfer.rejected',
      ],
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

const performUnsubscribe = async (z, bundle) => {
  z.console.log("performUnsubscribe bundle:", JSON.stringify(bundle, null, 2));

  const hookId = bundle.subscribeData.data.id;

  const options = {
    url: `${process.env.YOJEE_API_URL}/api/v3/dispatcher/webhooks/${hookId}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      access_token: bundle.authData.access_token,
      company_slug: bundle.authData.company_slug,
    },
    params: {},
    body: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    type: 'hook',
    performList: performList,
    sample: sample,
    outputFields: [
      { key: 'company_slug' },
      { key: 'created_at' },
      { key: 'data__driver__id' },
      { key: 'data__driver__name' },
      { key: 'data__eta' },
      { key: 'data__event_time' },
      { key: 'data__cancelled_at' },
      { key: 'data__completion_time' },
      { key: 'data__container_no' },
      { key: 'data__display_price' },
      { key: 'data__external_id' },
      { key: 'data__id' },
      { key: 'data__inserted_at' },
      { key: 'data__number' },
      { key: 'data__order__external_id' },
      { key: 'data__order__number' },
      { key: 'data__order_item__external_customer_id' },
      { key: 'data__order_item__external_customer_id2' },
      { key: 'data__order_item__external_customer_id3' },
      { key: 'data__order_item__state' },
      { key: 'data__order_item__tracking_number' },
      { key: 'data__reasons' },
      { key: 'data__order_items[]external_customer_id' },
      { key: 'data__order_items[]external_customer_id2' },
      { key: 'data__order_items[]external_customer_id3' },
      { key: 'data__order_items[]id' },
      { key: 'data__order_items[]inserted_at' },
      { key: 'data__order_items[]item__description' },
      { key: 'data__order_items[]item__global_tracking_number' },
      { key: 'data__order_items[]item__height' },
      { key: 'data__order_items[]item__id' },
      { key: 'data__order_items[]item__length' },
      { key: 'data__order_items[]item__payload_type' },
      { key: 'data__order_items[]item__quantity' },
      { key: 'data__order_items[]item__volume' },
      { key: 'data__order_items[]item__volumetric_weight' },
      { key: 'data__order_items[]item__weight' },
      { key: 'data__order_items[]item__width' },
      { key: 'data__order_items[]price' },
      { key: 'data__order_items[]service_type' },
      { key: 'data__order_items[]status' },
      { key: 'data__order_items[]tracking_number' },
      { key: 'data__order_items[]transfer_info' },
      { key: 'data__price' },
      { key: 'data__sender__id' },
      { key: 'data__sender__name' },
      { key: 'data__sender__organisation_name' },
      { key: 'data__sender__type' },
      { key: 'data__status' },
      { key: 'data__step_sequence' },
      { key: 'data__task_type' },
      { key: 'event_type' },
      { key: 'id' },
      { key: 'webhook_id' },
      { key: 'yojee_instance' },
    ],
    performSubscribe: performSubscribe,
    performUnsubscribe: performUnsubscribe,
  },
  key: 'webhook',
  noun: 'webhook',
  display: {
    label: 'Webhook',
    description: 'webhoook triggered for all event cases',
    hidden: false,
    important: true,
  },
};
