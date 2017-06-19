"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_constants_1 = require("../../shared/app-constants");
let PersonalInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'user id is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    address1: {
        type: String,
        required: [true, 'address line 1 is required']
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'city is required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },
    description: {
        type: String
    }
});
exports.PersonalInfo = mongoose.model(app_constants_1.APP_CONSTANTS.DB.COLLECTIONS.USERS, PersonalInfoSchema);
