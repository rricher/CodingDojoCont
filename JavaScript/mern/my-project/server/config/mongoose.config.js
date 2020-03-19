const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/peopledb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connection established"))
    .catch(err => console.log("there was an error", err))