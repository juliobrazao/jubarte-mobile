const app = require('./config/server').server
const setup = require('./config/setup').info
const port = 9800

app.route('/')
    .get((req, res) => {
        res.render('home', {
            title: setup.name,
            main_color: setup.colorScheme.main_dark
        })
    })

app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})