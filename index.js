const authentication = require('./authentication');
const webhookTrigger = require('./triggers/webhook.js');
const createOrderCreate = require('./creates/create_order.js');
const createSimpleOrderCreate = require('./creates/create_simple_order.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  creates: {
    [createOrderCreate.key]: createOrderCreate,
    [createSimpleOrderCreate.key]: createSimpleOrderCreate,
  },
  authentication: authentication,
  triggers: { [webhookTrigger.key]: webhookTrigger },
};
