import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const app = express();
const port = 3010;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDirectoryPath = path.join(__dirname, 'public');


app.use(express.static('public'));

// Control page route
app.get('/control', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, '/control.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})