const mongoose  = require("mongoose");

let isConnected = false;

 const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDb is already connected');
        return;
    }

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName :'mealManagementDb',
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('Database connection established')

        isConnected = true;
    }catch(error) {
        console.log(error);
        console.log('Database connection failed')
    }
}

module.exports = connectToDB;