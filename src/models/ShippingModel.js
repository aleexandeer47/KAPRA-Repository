/*Campos:

customerId
cartId
shippingAddress
street
colony
city
department
reference
country
shppingMethod
status
trackingNumber
shippedAt
deliveredAt

*/

import {Schema, model} from 'mongoose';

const ShippingSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shoppingCarts'
    },
    shippingAddress:[{
        street: {
            type: String,
        },
        colony: {
            type: String,
        },
        city: {
            type: String,
        },
        department: {
            type: String,
        },
        reference: {
            type: String,
        },
        country: {
            type: String,
        }
    }],
    shippingMethod: {
        type: String,
    },
    status: {
        type: String,
    },
    trackingNumber: {
        type: String,
    },
    shippedAt: {
        type: Date,
    },
    deliveredAt: {
        type: Date,
    }

}, {
    timestamps: true,
    strict: false
})

export default model('shipping', ShippingSchema);