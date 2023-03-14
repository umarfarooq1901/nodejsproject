const express = require('express');
const hbs = require("hbs");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
// jo iske through port milega uspe chalega

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");



app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);



app.use(express.static(static_path));

// routing

app.get("", (req, res)=>{
    res.render('index');
})
app.get("/about", (req, res)=>{
    res.render('about');
})
app.get("/weather", (req, res)=>{
    res.render('weather');
})
app.get("*", (req, res)=>{
    res.render('404error', {
        errormsg:"OOPS Page Not Found"
    })
})

// now we can delete index.html and about.html pages in public folder because we use hbs here

// partials 
// create new folder template, in template create new folder partials, in partials create new file navbar.hbs now through partials we can use it anywhere through:
//  {{>navbar}} in about.hbs

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
})

// to execute for the dynamic content in case i want to change the content in future
// nodemon src/app.js -e js,hbs
