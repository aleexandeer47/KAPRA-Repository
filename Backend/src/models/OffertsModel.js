/*Campos:

qualification
description
discount
productId
state
startDate
endDate

*/ 


import {schema, model} from 'mongoose';

const offertSchema = new schema({
    qualification: {
        type: String
    },
    description: {
        type: String
    },
    discount: {
        type: Number
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productBase'
    },
    state: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
},{
    timestamps: true,
    strict: false
});

export default model('offerts', offertSchema);