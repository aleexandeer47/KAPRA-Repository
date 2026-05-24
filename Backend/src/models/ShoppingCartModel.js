/*Campos

customerId
items
    productId
    personalizedProductId
    productName
    size
    quantity
    unitprice
    totalPrice
    customization
        color
        sencondaryColor
        logoURL
        logoPosition
        printMehod
        notes
totalQuantity
taxes
    taxType
    rate
    taxableAmount
    taxAmount
    inclusive
totalAmount



*/

import {Schema, model} from 'mongoose';

const ShoppingCartSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'customers',
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productBase',    
        },
        personalizedProductId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'personalizedProducts',    
        },
        productName: {
            type: String,
        },
        size:{
            type: String,
        },
        quantity: {
            type: Number,
        },
        unitPrice: {
            type: Number,
        },
        totalPrice: {
            type: Number,
        },
        customization: [{
            color: {
                type: String,
            },
            secondaryColor: {
                type: String,
            },
            logoURL: {
                type: String,
            },
            logoPosition: {
                type: String,
            },
            printMethod: {
                type: String,
            },
            notes: {
                type: String,
            }
        }]


    }],
    totalQuantity: {
        type: Number,
    },
    taxes: [{
        taxType: {
            type: String,
        },
        rate: {
            type: double,
        },
        taxableAmount: {
            type: double,
        },
        taxAmount: {
            type: double,
        },
        inclusive: {
            type: Boolean,
        }
    }],
    totalAmount: {
        type: Number
    }
},
{
    timestamps: true,
    strict: false
})


export default model('shoppingCarts', ShoppingCartSchema);