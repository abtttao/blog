//******** Importing   **********************/
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();


//******** View engine  **********************/
app.set('View engine', 'ejs');
// app.set('Views' , path.join(__dirname, 'views'));


//******** Middleware  **********************/
app.use(helmet());
app.use(express.static(path.join(__dirname, 'publice')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//******** Routes  **************************/


//******** Page routes  *********************/
//--root---
app.get('/', (res, res) => {
    const content = "I love back end I love back end I love back end I love back end"
    res.render('index', { content: content })
})

//--- sign in ----
app.get('/signin', (res, res) => {
    res.render('login')
})

//--- blog ----
app.get('/blog', (res, res) => {
    const years = [2020,2021,2019]
    const posts = [{title: "Today", detail: "quite hot" , year:2021},
    {title: "Tomoror", detail: "be fine" , year:2020},
    {title: "ccc", detail: "CCC" , year:2019}]
    res.render('blog' , {year:years});

})


//******** Other routes  ********************/
//-- login ----
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username == 'admin' && password == '1234') {
        res.send('Login OK');
    }
    else {
        res.status(400).send('Login failed')
    }
})


// 404, must be the last service
app.user((req, res) => {
    res.status(404).end();
});



//*************** Starting server***********/
const PORT = 3500
app.listen(PORT, =>() {
    console.log('Server is running at' + PORT);
});