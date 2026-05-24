/*
Campos:

invoiceId
orderId
customerId
paymentMethod
amount
status
paidAt

*/

import {schema, model} from 'mongoose';

const paymentSchema = new schema({
    invoiceId: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'tickets'
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    paymentMethod: {
        type: String
    },
    amount: {
        type: Number
    },
    status: {
        type: String
    },
    paidAt: {
        type: Date
    }
}, {
    timestamps: true,
    strict: false
});

export default model('payments', paymentSchema);
