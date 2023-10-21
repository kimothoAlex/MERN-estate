import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },
    description: {
      type: String,
      reqiured: true,
    },
    address: {
      type: String,
      reqiured: true,
    },
    regularPrice: {
      type: Number,
      reqiured: true,
    },
    discountPrice: {
      type: Number,
      reqiured: true,
    },
    bathrooms: {
      type: Number,
      reqiured: true,
    },
    bedrooms: {
      type: Number,
      reqiured: true,
    },
    furnished: {
      type: Boolean,
      reqiured: true,
    },
    parking: {
      type: Boolean,
      reqiured: true,
    },
    type: {
      type: String,
      reqiured: true,
    },
    offer: {
      type: Boolean,
      reqiured: true,
    },
    imageUrls: {
      type: Array,
      reqiured: true,
    },
    userRef: {
      type: String,
      reqiured: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
