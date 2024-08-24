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
        required: [true, "Please check your name"],
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

//  Initialized new database Person in the database fruits db
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "John Doe",
    age: 30,
});
//save in database person
//person.save();

//Sending data with no name but required
// const banana = new Fruits({
//     // name: "Guava",
//     rating: 9,
//     review: "Decent fruit!",
// });
// banana.save();

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

// finding the data in database
// Fruits.find()
//     .then((fruits) => {
// Showing the name of the fruits in database
//         fruits.forEach((fruit) => {
//             console.log(`Name : ${fruit.name}`);
//         });
//         mongoose.connection.close();
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//fruit.save();

// Updating the data in database
Fruits.updateOne({ _id: "66c9f2223faf187b0af5ea2d" }, { name: "Peach" })
    .then(() => {
        console.log("Updated Successfully");
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error("Error updating the data", error);
    });