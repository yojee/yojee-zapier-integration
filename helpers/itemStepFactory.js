const itemStepFactory = (item,index) => {
  console.log(index);
  return [{
    "type": "pickup",
    "order_step_id": 0,
    "step_group": index + 1,
    "step_sequence": 1,
    "item_id": index,
  },
  {
    "type": "dropoff",
    "order_step_id": 1,
    "step_group": index + 1,
    "step_sequence": 2,
    "item_id": index,
  }]
};
module.exports = itemStepFactory;