const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.static('build'))

// Takes to JSON data from the request and converts it to a javascript 
// object and then attaches it to the body property
app.use(express.json());

// Allows request from all origin (CORS Error)
app.use(cors())

const Person = require('./models/person');

// morgan.token('data', function (req, res) {return JSON.stringify(req.body)});
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms {:data}'));


app.get('/info', (req, res) => {

    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }

    const weekdays = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }


    var today = new Date();

    const month = months[(today.getMonth() + 1)];
    const weekday = weekdays[today.getDay()];
    const date = today.getDate()
    const year = today.getFullYear()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const recorderData = `${weekday} ${month} ${date} ${year} ${time} ${timezone}`;

    Person.count((err, count) => {
        let phonebookSize = count;
        const htmlInfo = `<div><p>Phone has info for ${phonebookSize} people</p><p>${recorderData}</p></div>`;
        res.send(htmlInfo);
    })
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(notes => {
        res.json(notes);
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        res.json(person)
    })
})

app.delete('/api/persons/:id', (req, res, next) => {
    const delete_id = req.params.id;

    Person.findByIdAndRemove(delete_id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error));
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body;

    const person = {
        name: body.name,
        phone: body.phone
    }

    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatePerson => {
            res.json(updatePerson);
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({ error: "System malfunction, conten is missing..." });
    }

    console.log("Body", body);

    const person = new Person({
        name: body.name,
        phone: body.phone,
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
});

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})