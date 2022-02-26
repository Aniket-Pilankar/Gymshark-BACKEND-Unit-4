const mongoose= require("mongoose");

const accessoriesSchema= new mongoose.Schema(
    {
        img:{type: String, required: true},
        name:{type: String, required: true},
        price:{type: Number, required: true},
        color:{type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    });

    module.exports = mongoose.model("accessories",accessoriesSchema);