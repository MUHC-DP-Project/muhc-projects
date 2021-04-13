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

let sampleId = 1;

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
                sampleId = res.body._id;
                assert.exists(res.body._id);
            }).catch(err =>{
                console.log(JSON.stringify(err));
                assert.fail();
        });
    })
});

describe("GET a project", () => {
    it('should return a list of all the projects', async() => {
        return chai.request(baseUrl).get("")
        .then((res) => {
            expect(res.body).length.greaterThan(0)
        }).catch( (err) => {
            assert.fail()
        })
    })
});

//GET PROJECT BY ID
describe('projects', () => {
    describe('GET /projects/:id : get project by id', () => {
        it('should get the project by an id', async() => {
            //ID 1 will always exist by before clause.
            return chai.request(baseUrl).get("" + sampleId)
            .then((res) => {
                expect(res).to.have.status(200);
                
            }).catch( (err) => {
                assert.fail()
            })
        })
    })
});

//PUT Project by ID
describe('projects', () => {
    describe('PUT /projects/:id : amend a specific project by id', () => {
        it('should amend the project by an id with fields provided', async() => {
            return chai.request(baseUrl).put("" + sampleId)
            .send({studySize : "hello"})
            .then((res) => {
                //check if title changed.
                console.log(res);
                expect(res.body.studySize).to.be.equal("hello");
                
            }).catch( (err) => {
                assert.fail()
            })
        })
    })
});

describe('projects', () => {
    describe('GET /projects/:id : delete project by id', () => {
        it('should delete the project by an id', async() => {
            //ID 1 will always exist by before clause.
            return chai.request(baseUrl).delete("" + sampleId)
            .then((res) => {
                expect(res).to.have.status(200);
                sampleId--;
            }).catch( (err) => {
                assert.fail()
            })
        })
    })
});

