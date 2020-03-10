const express = require('express');
const faker = require('faker');
const app = express();

let ucount = 0;
class User {
    constructor() {
        this._id = ucount;
        ucount++;
        this.firstName = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    } 
}

var ccount = 0;
class Company {
    constructor() {
        this._id = ccount;
        ccount++;
        this.name = faker.company.companyName();
        this.address = [
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country()
        ];
    }
}


app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.json(company);
});

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.json({user: user,company: company});
});

const server = app.listen(8000, () => 
    console.log(`this server is ready on port ${server.address().port}!`)
    );