/*
Campos:

productName
category
basePrice
color
images
main
gallery
0
1
2
3
4
5
description
sizes
stock
price

*/


import {Schema, model} from 'mongoose';
const ProductBaseSchema = new Schema({

    productName: {
        type: String,
    },
    category: {
        type: String,
    },
    basePrice: {
        type: Number,
    },
    color: {
        type: String,
    },
    images: [{
        main: {
            type: String,
        },
        galery: [{
            num0: {
                type: String
            },
            num1: {
                type:String
            },
            num2: {
                type:String
            },
            num3: {
                type: String
            },
            num4: {
                type: String
            },
            num5: {
                type: String
            }
        }]
    }],
    descripcion: {
        type: String
    },
    sizes: [{
        size: {
            type: string
        },
        stock: {
            type: number
        },
        price: {
            type: number
        }
    }]

},
{
    timestamps: true,
    strict: false
}
)

export default model("productBase", ProductBaseSchema)