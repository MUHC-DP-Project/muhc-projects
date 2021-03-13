const { assert, expect } = require("chai");
const chai = require("chai");
const mongoose = require('mongoose');
const connection = require('mongoose').connection;
const { exit } = require('process');
require('dotenv').config();
const {sample_project1} = require("./sample_project");
let baseUrl = "http://localhost:8080/projects/";
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

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

describe("create a project", () => {
    it("return the project JSON", async () => {
        return chai.request(baseUrl)
            .post("")
            .send(sample_project1)
            .then((res) => {
                expect(res).to.have.status(200);
                assert.exists(res.body._id);
            }).catch(err =>{
                console.log(JSON.stringify(err));
                assert.fail();
        });
    })
});