const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// LIMITS FOR BIGGER FILES (IMAGES)
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());

const exampleRoute = require('./routes/exampleRoute');

app.use('/examp', exampleRoute);

const PORT = 3001;

// Accessing the path module

// // Step 1:
// app.use(express.static(path.resolve(__dirname, '../client/build')));
// // Step 2:
// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
