const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;


console.log(__dirname)

const app = express();
const router = express.Router()



//app.use(express.static('/client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


console.log('what is up lil bro')


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
