/*
Campos:

name
lastName
email
password
phoneNumber
dui
companie
status
frequency
is_verified

*/


import {Schema, model} from 'mongoose';

const customerSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String
    },

    dui: {
        type: String
    },
    companie: {
        type: String
    },
    status: {
        type: String
    },
    frequency: {
        type: String
    },
    is_verified: {
        type: Boolean
    },
    loginAttempts: {
        type: Number
    },
    timeOut: {
        type: Date
    },
    imagen_URL: {
        type: String
    }

}, {
    timestamps: true,
    strict: false
});


export default model('customers', customerSchema);