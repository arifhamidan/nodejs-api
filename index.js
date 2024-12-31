const express = require('express');
//
const postRoute = require('./router/postRoute');
const userRoute = require('./router/userRoute');

//
const app = express();

//untuk menangkap req body json
app.use(express.json());

//api check
app.get('/', (req, res)=>{
    res.send('OK');
});

app.use('/api/', postRoute, userRoute);

//global route
app.use('*', (req,res)=>{
    res.send('URL Endpoint tidak dikenali');
});

app.listen(3002, ()=>{
    console.log('Server listening on port 3002');
});