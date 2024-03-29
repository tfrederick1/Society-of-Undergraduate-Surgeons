const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.set('useUnifiedTopology', true);
        await mongoose.connect(db,
             {useNewUrlParser : true},
             {useUnifiedTopology: true},
             {useCreateIndex: true},
             {useFindAndModify: false},
             {useCreateIndexes: true});
             
        console.log('MongoDB connected');
    }catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
