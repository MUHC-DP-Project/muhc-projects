const assert = require('chai').assert;
const mongoose = require('mongoose');
const connection = require('mongoose').connection;
const { exit } = require('process');
require('dotenv').config();

before(async() => {
    const MONGO_DB_URI = process.env.MONGO_TEST_DB_URI;
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    const resp = await mongoose.connect(MONGO_DB_URI, options); 
});

after(async() => {
    mongoose.disconnect();
    mongoose.connection.close();
});

afterEach(async() => {
    const collections = Object.keys(mongoose.connection.collections);

    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany({});
    }
})

describe('App',function(){
    it('first test', function(){
        assert.equal(true, true);
    });
});