const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());


app.use('/api', customerRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
