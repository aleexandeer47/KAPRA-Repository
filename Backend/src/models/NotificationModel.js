/*Campos:

customer_id
description
status
title
type
priority

*/ 


import mongoose, {schema, model} from 'mongoose';

const schemaNotification = new schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    },
    priority: {
        type: String
    }
},{
    timestamps: true,
    strict: false
});


export default model('notifications', schemaNotification);