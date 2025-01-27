require('dotenv').config();
const { sendEmail } = require('./controller/email');

const express = require('express');
const app = express();


app.use(express.json());

app.post('/send-email', sendEmail);

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running on port', process.env.PORT || 4000);
    }
);



