import app from './app'

const port = 4000;

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}.`)
})