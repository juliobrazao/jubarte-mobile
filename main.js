const app = require('./config/server').server
const setup = require('./config/setup').info
const port = 80

app.route('/')
    .get((req, res) => {
        res.render('login', {
            title: setup.name,
            author: setup.owner
        })
    })

app.route('/main')
    .get((req, res) => {
        res.render('home', {
            title: setup.name
        })
    })

app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})
