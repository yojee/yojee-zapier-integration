const itemFactory = (item) => {
  return {
    "description": item.item_description,
    "width": item.item_width,
    "length": item.length,
    "height": item.height,
    "weight": item.item_weight,
    "quantity": item.item_quantity,
    "info": item.item_info,
    "external_customer_id": item.item_external_customer_id,
    "external_customer_id2": item.item_external_customer_id2,
    "external_customer_id3": item.item_external_customer_id3,
    "payload_type": item.item_payload_type,
    "price_info": item.item_price_info,
    "service_type": item.item_service_type,
    "volume": item.item_volmue,
    "volumetric_weight": item.item_volumetric_weight,
    "price_amount": item.item_price_amount,
  };
};
module.exports = itemFactory;