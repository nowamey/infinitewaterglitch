const express = require('express');
const path = require('path');

//grabbing function to spawn process
const spawn= require('child_process').spawn;



//reading envvariables
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const PYINTERPRETER = process.env.PYINTERPRETER_PATH;


console.log(PORT)


console.log(__dirname)

const app = express();
const router = express.Router()


//this pulls all files from the client directory and make them available for requests from the server
app.use(express.static(__dirname + '/client'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


console.log('what is up lil bro')


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
})


//Proof of concept for running py scripts based on request. Based on certain action i want to call the script to use spark and process some arbitrary dataset.

//I dont really care if it's practical, just want to hook things together 
app.get('/pytest', (req, res) => {
    const py = spawn(process.env.PYINTERPRETER_PATH,['quicktest.py'])

    let output = "";
    py.stdout.on("data", (data) => {
          output += data.toString();
    });
    py.on("close", () => {                     
        console.log(output);
        //res.sendStatus(200);
    });



    //ok so ill just do a cursed call to the script and serve the data from it 

    // we shall spark
    res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});