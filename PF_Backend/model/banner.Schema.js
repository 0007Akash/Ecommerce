import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
      enum: [
        "top",
        "tophits",
        "fandom",
        "boriginals",
        "toohottobemissed",
        "ourbestpicks",
      ],
      trim: true,
    },
    manufacturerBrand: {
      type: String,
      required: true,
      default: "Bewakoof®",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
