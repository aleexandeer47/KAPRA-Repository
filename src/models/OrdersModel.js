/*
Campos
customerId
cartId
orderNumber
status
tracing
preProduccion
produccion
finalizado
totalAmount
paymentAddress
shippingAddress
street
colony
city
department
reference
country
notes

*/


import {Schema, model} from 'mongoose';

const OrdersSchema = new moongose.Schema({

    custumer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
    },

    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShoppingCart',
    },
    order_number: {
        type: String
    },
    status: {
        type: String,
    }, 
    tracing: [
        {
      pre_Produccion:{
        type: Date,
        },
        produccion: {
            type: Date,
        },
        finalizado: {
            type: Date,
        }
        },
    ],

    totalAmout: {
        type: Number,
    },
    paymentStatus: {
        type: String,
    },
    shippingAddress: [{
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
    notes: {
        type: String,
    }


} , 
{
    timestamps: true,
    strict: false
});

export default model('orders', OrdersSchema);