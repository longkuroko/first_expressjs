module.exports = {
    muntipleMongooseToObject: function (mongooseArrays){
        return mongooseArrays.map( mongoose => mongoose.toObject())
    },

    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}