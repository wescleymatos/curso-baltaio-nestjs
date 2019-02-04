import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    pets: [
        {
            name: {
                type: String
            },
            gender: {
                type: String,
                enum: ['male', 'female', 'none']
            },
            kind: {
                type: String
            },
            brand: {
                type: String
            }
        }
    ],
    billingAddress: {
        zipCode: {
            type: String
        },
        street: {
            type: String
        },
        propertyNumber: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        }
    },
    shippingAddress: {
        zipCode: {
            type: String
        },
        street: {
            type: String
        },
        propertyNumber: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        }
    },
    creditCard: {
        holder: {
            type: String
        },
        numericSequence: {
            type: String
        },
        expiration: {
            type: String
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});