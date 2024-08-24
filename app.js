const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.set("strictQuery", false);
const uri = "mongodb://localhost:27017/fruitsDB";
mongoose
    .connect(uri)
    .then(() => {
        {
            console.log("Connected to Local database Succesfully");
            app.listen(port, () => {
                console.log(`Example app listening on port ${port}!`);
            });
        }
    })
    .catch((error) => {
        console.error("Error connecting to Local database", error);
    });

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String,
// });

//Giving the min and max value with data validation
const fruitSchema = new mongoose.Schema({
    // data validation
    name: {
        type: String,
        required: [true, "Please cehck your name"],
    },
    //
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});
const Fruits = mongoose.model("Fruits", fruitSchema);
// const fruit = new Fruits({
//     name: "Apple",
//     rating: 10,
//     review: "Excellent fruit!",
// });

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "John Doe",
    age: 30,
});

//person.save();

const banana = new Fruits({
    // name: "Guava",
    rating: 9,
    review: "Decent fruit!",
});
banana.save();
// const apple = new Fruits({
//     name: "Apple",
//     rating: 8,
//     review: "Excellent fruit!",
// });
// const Orange = new Fruits({
//     name: "Orange",
//     rating: 9.5,
//     review: "Perfect fruit!",
// });
// Fruits.insertMany([banana, apple, Orange]);

// Fruits.find()
//     .then((fruits) => {
//         fruits.forEach((fruit) => {
//             console.log(`Name : ${fruit.name}`);
//         });
//         mongoose.connection.close();
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//fruit.save();
app.get("/", (req, res) => {
    res.send("Hello World!");
});