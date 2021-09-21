const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors')

app.use(express.json())
app.use(cors())

// morgan.token('data', function (req, res) {return JSON.stringify(req.body)});
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms {:data}'));

// let persons = [
//     {
//         "id": 1,
//         "name": "Arto Hellas",
//         "number": "040-123456"
//     },
//     {
//         "id": 2,
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523"
//     },
//     {
//         "id": 3,
//         "name": "Dan Abramov",
//         "number": "12-43-234345"
//     },
//     {
//         "id": 4,
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122"
//     }
// ]

app.get('/', (req, res) => {
    res.json({content: "System is back online"})
});

// app.get('/info', (req, res) => {
//     const phonebookSize = persons.length;

//     const months = {
//         1: "Jan",
//         2: "Feb",
//         3: "Mar",
//         4: "Apr",
//         5: "May",
//         6: "Jun",
//         7: "Jul",
//         8: "Aug",
//         9: "Sep",
//         10: "Oct",
//         11: "Nov",
//         12: "Dec"
//     }

//     const weekdays = {
//         0: "Sun",
//         1: "Mon",
//         2: "Tue",
//         3: "Wed",
//         4: "Thu",
//         5: "Fri",
//         6: "Sat"
//     }


//     var today = new Date();

//     const month = months[(today.getMonth() + 1)];
//     const weekday = weekdays[today.getDay()];
//     const date = today.getDate()
//     const year = today.getFullYear()
//     const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     const recorderData = `${weekday} ${month} ${date} ${year} ${time} ${timezone}`;
//     const htmlInfo = `<div><p>Phone has info for ${phonebookSize} people</p><p>${recorderData}</p></div>`;

//     res.send(htmlInfo);
// })

// app.get('/api/persons', (req, res) => {
//     res.json(persons);
// })

// app.get('/api/persons/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const person = persons.find(person => person.id === id);

//     res.json(person);
// })

// app.delete('/api/persons/:id', (req, res) => {
//     const delete_id = Number(req.params.id);
//     persons = persons.filter(person => person.id !== delete_id);

//     // Check if the item was actually deleted
//     res.status(204).end();
// })

// app.post('/api/persons', (req, res) => {
//     const maxId = persons.length > 0
//     ? Math.max(...persons.map(n => n.id)) 
//     : 0

//     let newPerson = req.body;
//     newPerson.id = maxId + 1;

//     if(!newPerson.name || !newPerson.number){
//         return res.status(400).json({error: 'name or number missing'})
//     }

//     let personExists = persons.find((person => person.name === newPerson.name));
//     if(personExists){
//         return res.status(400).json({error: 'name must be unique'})
//     }

//     persons.push(newPerson);
//     res.json(newPerson);
// });

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})