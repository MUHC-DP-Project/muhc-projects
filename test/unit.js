const assert = require('chai').assert;
const mongoose = require('mongoose');
const { exit } = require('process');
require('dotenv').config();

describe('App',function(){
    it('first test', function(){
        assert.equal(true, true);
    });
});

describe('Database Connection', function() {
    it('should check whether the database can be connected to', async function() {
        const MONGO_DB_URI = process.env.MONGO_TEST_DB_URI;
        const options = {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        };
        const resp = await mongoose.connect(MONGO_DB_URI, options);
        
        //  kill db connection somehow
        setTimeout(() => exit(), 2000);
    })
})