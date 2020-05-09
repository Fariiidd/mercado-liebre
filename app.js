let express = require('express');
let app = express();
let home = require('./router/home')

app.listen(3000, () => console.log('Todo esta bien'));

app.get('/', home);