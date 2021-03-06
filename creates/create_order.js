const perform = async (z, bundle) => {
  const options = {
    url: 'https://umbrella-dev.yojee.com/api/v3/dispatcher/orders',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ACCESS_TOKEN: bundle.authData.access_token,
      COMPANY_SLUG: bundle.authData.company_slug,
    },
    params: {},
    body: {
      external_id: bundle.inputData.external_order_id,
      sender_id: 1750,
      item_steps: [
        {
          item_id: 0,
          order_step_id: 0,
          step_group: 1,
          step_sequence: 1,
          type: 'pickup',
        },
        {
          item_id: 0,
          order_step_id: 1,
          step_group: 1,
          step_sequence: 2,
          type: 'dropoff',
        },
      ],
      steps: [
        {
          quantity: 4,
          address: '20 Pasir Pajang Road',
          address2: '',
          country: 'SG',
          state: '',
          postal_code: '117439',
          contact_company: 'S Company',
          contact_name: 'John Lim',
          contact_phone: '+6562010000',
          contact_email: 'john@company1.example.com',
          from_time: '2021-08-01T08:59:22.813Z',
          to_time: '2021-08-02T07:59:59.813Z',
        },
        {
          quantity: 4,
          address: '189B Rivervale Drive Singapore',
          address2: '',
          country: 'SG',
          state: '',
          postal_code: '542189',
          contact_company: 'C Company',
          contact_name: 'Peter Tan',
          contact_phone: '+6562010001',
          contact_email: 'peter@company2.example.com',
          from_time: '2021-08-03T08:59:22.813Z',
          to_time: '2021-08-04T07:59:59.813Z',
        },
      ],
      items: [
        {
          description: 'Laptop Computer',
          width: 0.11,
          length: 0.12,
          height: 0.044,
          weight: 334,
          quantity: 4,
          info: 'Item Infor',
          external_customer_id: '',
          external_customer_id2: '',
          external_customer_id3: '',
          payload_type: 'same_day',
          price_info: '',
          service_type: 'express',
          volume: 1000,
          volumetric_weight: 1,
          price_amount: 0,
          metadata: {
            preassign: {
              worker_id: 4239,
            },
          },
        },
      ],
      price_amount: '0',
      price_currency: 'SGD',
      sender_type: 'organisation',
      container_no: '',
    },
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
    inputFields: [
      {
        key: 'external_order_id',
        label: 'External Order Id',
        type: 'string',
        helpText: 'Unique reference ID in your system',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'sender_Id',
        label: 'Sender ID',
        type: 'integer',
        helpText:
          "The numeric ID of the Sender in Yojee's system. Either Sender ID or Sender External ID is needed to create an order",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'external_sender_id',
        label: 'External Sender ID',
        type: 'string',
        helpText:
          "The string that uniquely identifies a Sender in Yojee's system. Either Sender ID or Sender External ID is needed to create an order",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'pickup_details',
        children: [
          {
            key: 'pickup_address',
            label: 'Address Line 1',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'address2',
            label: 'Address Line 2',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'country',
            label: 'Country',
            type: 'string',
            helpText:
              "Two-character code to denote country. For e.g. 'SG' for Singapore",
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'state',
            label: 'State',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'postal_code',
            label: 'Postal Code',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_company',
            label: 'Contact Company',
            type: 'string',
            helpText: 'Company of the contact person',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_name',
            label: 'Contact Name',
            type: 'string',
            helpText: 'Name of the contact person',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_phone',
            label: 'Contact Phone',
            type: 'string',
            helpText:
              'The phone number if SMS notification is required. The corresponding notification setting also needs to be enabled in Yojee.',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_email',
            label: 'Contact Email',
            type: 'string',
            helpText:
              'The email address if email notification is required. The corresponding notification setting also needs to be enabled in Yojee',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'from_time',
            label: 'From Time',
            type: 'string',
            helpText:
              'Start of time slot for this step in ISO8601 format. Example: 2021-08-03T08:59:22.813Z',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'to_time',
            label: 'To Time',
            type: 'string',
            helpText:
              'End of time slot for this step in ISO8601 format.  Example: 2021-08-04T07:59:59.813Z',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
        ],
        label: 'Pickup Details',
        required: false,
        altersDynamicFields: false,
      },
      {
        key: 'dropoff_details',
        children: [
          {
            key: 'address',
            label: 'Address Line 1',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'address2',
            label: 'Address Line 2',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'country',
            label: 'Country',
            type: 'string',
            helpText:
              "Two-character code to denote country. For e.g. 'SG' for Singapore",
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'state',
            label: 'State',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'postal_code',
            label: 'Postal Code',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_company',
            label: 'Contact Company',
            type: 'string',
            helpText: 'Company of the contact person',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_name',
            label: 'Contact Name',
            type: 'string',
            helpText: 'Name of the contact person',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_phone',
            label: 'Contact Phone',
            type: 'string',
            helpText:
              'The phone number if SMS notification is required. The corresponding notification setting also needs to be enabled in Yojee.',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'contact_email',
            label: 'Contact Email',
            type: 'string',
            helpText:
              'The email address if email notification is required. The corresponding notification setting also needs to be enabled in Yojee',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'from_time',
            label: 'From Time',
            type: 'string',
            helpText:
              'Start of time slot for this step in ISO8601 format. Example: 2021-08-03T08:59:22.813Z',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'to_time',
            label: 'To Time',
            type: 'string',
            helpText:
              'End of time slot for this step in ISO8601 format. Example: 2021-08-04T07:59:59.813Z',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
        ],
        label: 'Dropoff Details',
        required: false,
        altersDynamicFields: false,
      },
      {
        key: 'items',
        children: [
          {
            key: 'description',
            label: 'Description',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'width',
            label: 'Width',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'length',
            label: 'Length',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'height',
            label: 'Height',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'weight',
            label: 'Weight',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'quantity',
            label: 'Quantity',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'info',
            label: 'Info',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'external_customer_id',
            label: 'Additional Reference Number 1',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'external_customer_id2',
            label: 'Additional Reference Number 2',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'external_customer_id3',
            label: 'Additional Reference Number 3',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'payload_type',
            label: 'Item Type',
            type: 'string',
            helpText: 'Item Type defined in Yojee Dispatcher',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'price_info',
            label: 'Price Info',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'service_type',
            label: 'Service Type',
            type: 'string',
            helpText: 'Service Type defined in Yojee Dispatcher',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'volume',
            label: 'Volume',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'volumetric_weight',
            label: 'Volumetric Weight',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'price_amount',
            label: 'Price Amount',
            type: 'number',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
        ],
        label: 'Items',
        required: false,
        altersDynamicFields: false,
      },
      {
        key: 'price_amount',
        label: 'Price Amount',
        type: 'number',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'price_currency',
        label: 'Price Currency',
        type: 'string',
        helpText: 'Currency for the Order',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        cancelled_at: null,
        container_no: null,
        display_price: 'SGD 0',
        external_id: 'ZAPIER-210909-001',
        id: 414856,
        inserted_at: '2021-09-09T06:49:41.813325Z',
        invoice_ref: 'IV-WGAVGZVDUNVI',
        number: 'O-MDE79SCUBJTM',
        order_items: [
          { cod_price: null, id: 436250, tracking_number: 'YOJ-FL4BKJZP1QLP' },
        ],
        paid: false,
        placed_by_user_profile_id: 5929,
        price: { amount: '0', currency: 'SGD' },
        sender_id: 1750,
        status: 'created',
      },
      message: 'Created the order.',
      warning: false,
    },
    outputFields: [
      { key: 'data__external_id', label: 'External Id' },
      { key: 'data__id', label: 'Order Id' },
      { key: 'data__number', label: 'Order Number' },
      { key: 'message', label: 'Message' },
      { key: 'warning', label: 'Warning' },
    ],
  },
  key: 'create_order',
  noun: 'Order',
  display: {
    label: 'Create Order',
    description: 'Creates aY Yojee Order',
    hidden: false,
    important: true,
  },
};
