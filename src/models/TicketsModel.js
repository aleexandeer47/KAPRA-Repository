/*
Campos:

orderId:
customerId
status
billingAddress
    street
    colony
    city
    department
    reference
    country
    tickentNumber

*/

import {Schema, model} from 'mongoose';

const TicketsSchema = new Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders',
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
    },
    status: {
        type: String,
    },
    billingAddress: [{
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
        },
    }],
    ticketNumber: {
        type: String,
    }
}, {
    timestamps: true,
    strict: false,
})

export default model('tickets', TicketsSchema);