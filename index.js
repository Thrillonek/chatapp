import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
env.config();

mongoose
	.connect(process.env.mongoURI)
	.then((res) => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

app.use(express.static('./dist/'));

app.get('/', (req, res) => {
	res.sendFile('./dist/index.html');
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
