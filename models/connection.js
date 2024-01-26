const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:31219185@myfirstdatabase.2qefu8m.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
