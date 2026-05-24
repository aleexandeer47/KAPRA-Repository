/*
Campos:

orderId
customerId
companyName
status
baseProductId
customization
color
secondaryColor
logoURL
logoPosition
printMethod
notes
quantities
size
qty
unitPrice
totalQty
totalPrice
deliveryDate

*/


import { Schema, model } from "mongoose";

const PersonalizedProductsSchema = new Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'

    },
    companyName: {
        type: String
    },
    status: {
        type: String
    },
    baseProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productBase'
    },
    customization: [{
        color: {
            type: String
        },
        secondaryColor: {
            type: String
        },
        LogoURL: {
            type: String
        },
        LogoPosition: {
            type: String
        },
        printMethod: {
            type: String
        },
        notes: {
            type: String
        }
    }],
    quantities: [{
        size: {
            type: String
        },
        qty: {
            type: Number
        },
        unitPrice: {
            type: Number
        }
    }],
    totalQty: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    deliveryDate: {
        type: Date
    }

}, {
    timestamps: true,
    strict: false
});


export default model('personalizedProducts', PersonalizedProductsSchema);