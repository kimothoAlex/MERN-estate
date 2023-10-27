import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  console.log(listing);

  if (!listing) {
    return next(errorHandler(400, "Listing doesnt exist"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your listings"));
  }

  try {
    const udatedLiting = await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json(udatedLiting);
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(400, "Listing not found"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can upload your own listing"));
  }
  try {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json("Listing updated successfully");
  } catch (error) {
    next(error);
  }
};
