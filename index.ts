import express from 'express'
import morgan from 'morgan';

const app = express();

const PORT = 3000;

app.use(
  morgan('combined'))


app.get('/', (req, res) => res.send('Test'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: https://localhost:${PORT}`);
});
