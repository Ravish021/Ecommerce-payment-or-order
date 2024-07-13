const mongooes = require('mongoose');

const orderProductSchema = new mongooes.Schema({
    productDetails:{
        type:Array,
        default:[],
    },
    email:{
        type:String,
        default:""
    },
    userId:{
        type:String,
        default:""
    },
    paymentDetails:{
        paymentId:{
            type:String,
            default:""
        },
        payment_method_type:[],
        payment_status:{
            type:String,
            default:"",
        },
    },
    shipping_options:[],
    totalAmount:{
        type:Number,
        default:0
    } 
},{
    timestamps:true
})

const orderModel = mongooes.model('orderModel',orderProductSchema);
module.exports = orderModel;