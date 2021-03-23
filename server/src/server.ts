import express, { request, response } from 'express';
import cors from 'cors';
import { v4 } from 'uuid';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json({ ok: true });
});


app.get('/location', (request, response) => {
    const location = [
        {lat: -22.483191, lng: -47.473417, id: v4()},
        {lat: -22.483268, lng: -47.472779, id: v4()},
        {lat: -22.484537, lng: -47.472944, id: v4()},
        {lat: -22.484438, lng: -47.473551, id: v4()},
    ];

    response.status(202).json(location);
});

app.post('/location', (request, response) => {
    const { coords } = request.body;

    console.log(coords);

    response.status(200).send();
});

app.listen(3000, () => {
    console.log('server running');
});