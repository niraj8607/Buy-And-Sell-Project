const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phoneno: {
        type: String,
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    refreshToken: {
        type: String
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
}, {
    timestamps: true 
});

module.exports = mongoose.model("user",userSchema);