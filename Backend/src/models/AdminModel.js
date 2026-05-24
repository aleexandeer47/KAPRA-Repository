/*Campos:
    name
    lastName
    email
    password
    status
    is_verified
*/ 


import {schema, model} from 'mongoose';

const adminSchema = new schema({
    name: {
        type: String,   },
    lastName: {
        type: String,   },
    email: {
        type: String,   },
    password: {
        type: String,   },
    status: {
        type: String,   },
    is_verified: {
        type: Boolean   }
}, {
    timestamps: true, 
    strict: false
});

export default model('admins' , adminSchema);
