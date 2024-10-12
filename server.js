var express = require("express")
const PORT = process.env.PORT || 3000;
console.log(process.env)
const app = express();



console.log('what is up lil bro')


app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});