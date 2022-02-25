const mongoose= require("mongoose");

const womenSchema= new mongoose.Schema(
    {
        img:{type: String, required: true},
        name:{type: String, required: true},
        price:{type: Number, required: true},
        color:{type: String, required: true}
    });

    module.exports = mongoose.model("women",womenSchema);