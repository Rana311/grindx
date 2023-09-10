// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/grindx';

// MongoClient.connect(url, function(err, client) {
//   if (err) throw err;
//   const db = client.db();

//   // Insert a to-do task
//   const todoTask = {
//     title: 'Buy groceries',
//     description: 'Milk, eggs, bread, etc.',
//     dueDate: new Date('2023-09-01'),
//   };

//   db.collection('todo').insertOne(todoTask, function(err, res) {
//     if (err) throw err;
//     console.log('To-do task inserted');
//     client.close();
//   });
// });

// const http = require('http')
// const fs = require('fs')
// const fileContent = fs.readFileSync("C:/Users/kumar/webd/productivity-x/public/index.html", "utf-8")

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(fileContent)
// })

// server.listen(80, '127.0.0.1', () => {
//   console.log("Listening on port 80")
// });

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;
// const home = fs.readFileSync('index.html')
// const about = fs.readFileSync('./about.html')
// const services = fs.readFileSync('./services.html')
// const contact = fs.readFileSync('./contact.html')

// const server = http.createServer((req, res)=>{
//     console.log(req.url);
//     url = req.url;

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     if(url == '/'){
//         res.end(home);
//     }
//     else if(url == '/about'){
//         res.end(about);
//     }
//     else if(url == '/services'){
//         res.end(services);
//     }
//     else if(url == '/contact'){
//         res.end(contact);
//     }
//     else{
//         res.statusCode = 404;
//         res.end("<h1>404 not found</h1>");
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });

// db.js

// const mongoose = require('mongoose');

// // Replace 'YOUR_LOCAL_MONGODB_URI' with the appropriate connection URI
// const mongoURI = 'mongodb://localhost:27017/grindx';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Now you can define your Mongoose models and perform database operations


// Define a Note schema and model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

// Save a note to the database
const newNote = new Note({ title: 'Note Title', content: 'Note Content' });
newNote.save();

// Retrieve notes from the database
Note.find({}, (err, notes) => {
  if (err) {
    console.error(err);
  } else {
    console.log(notes);
  }
});



