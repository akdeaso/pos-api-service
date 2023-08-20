const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const orderItemSchema = Schema({
  name: {
    type: String,
    minlength: [5, "The product name must be at least 5 characters long"],
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  qty: {
    type: Number,
    required: [true, "Product qty is required"],
    min: [1, "Minimum qty is 1"],
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});

module.exports = model("OrderItem", orderItemSchema);
