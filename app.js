const express = require('express');
const app = express();
var port = process.env.PORT;
app.get('/', (req,res) => res.send(process.env));
app.listen(port, () => console.log('server is running on port'+port ));
