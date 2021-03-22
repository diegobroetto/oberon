import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json({ ok: true });
});

app.listen(3000, () => {
    console.log('server running');
});