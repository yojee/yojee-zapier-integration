require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - create_simple_order', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        access_token: process.env.ACCESS_TOKEN,
        company_slug: process.env.COMPANY_SLUG,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
      },

      "inputData": {
        "external_order_id": "1016",
        "sender_id": 1750,
        "pickup_address": "Blk 308A Anchorvale Road,Blk 308A Anchorvale Road",
        "pickup_country": "SG,SG",
        "pickup_postal_code": "ori541308,541308",
        "pickup_address2": "#07-01,#07-01",
        "dropoff_address": "Blk 119 Rivervale Road,Blk 119 Rivervale Road",
        "dropoff_country": "SG,SG",
        "dropoff_postal_code": "530119,530119",
        "dropoff_contact_name": "Choong YongKoh",
        "item_description": "Toy C,Toy B",
        "item_payload_type": "package",
        "item_service_type": "same_day",
        "items": [
          {
            "item_description": "Toy C",
            "item_payload_type": "package",
            "item_service_type": "same_day"
          },
          {
            "item_description": "Toy B",
            "item_payload_type": "package",
            "item_service_type": "same_day"
          }
        ]
      },
      "inputDataRaw": {
        "external_order_id": "{{133583457__order_number}}",
        "sender_id": "1750",
        "pickup_address": "{{133583457__line_items[]origin_location__address1}}",
        "pickup_country": "{{133583457__line_items[]origin_location__country_code}}",
        "pickup_postal_code": "ori{{133583457__line_items[]origin_location__zip}}",
        "pickup_address2": "{{133583457__line_items[]origin_location__address2}}",
        "dropoff_address": "{{133583457__line_items[]destination_location__address1}}",
        "dropoff_address2": "{{133583457__line_items[]destination_location__address2}}",
        "dropoff_country": "{{133583457__line_items[]destination_location__country_code}}",
        "dropoff_postal_code": "{{133583457__line_items[]destination_location__zip}}",
        "dropoff_contact_company": "{{133583457__shipping_address__company}}",
        "dropoff_contact_name": "{{133583457__shipping_address__first_name}}{{133583457__shipping_address__last_name}}",
        "dropoff_contact_phone": "{{133583457__shipping_address__phone}}",
        "item_description": "{{133583457__line_items[]name}}",
        "item_payload_type": "package",
        "item_service_type": "same_day"
      },
    };

    const result = await appTester(
      App.creates['create_simple_order'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
