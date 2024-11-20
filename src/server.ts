
const mongoose = require('mongoose');
import { env  } from 'process';
import app from './app';
import config from './app/config';



async function main(){
    await mongoose.connect(config.database_url);
}

 app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
  });