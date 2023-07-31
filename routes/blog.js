const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/', (req, res)=>{
    res.render('home')
})

router.get('/blogs', (req, res)=>{
    blogs.blogs.forEach(element => {
        // console.log(blogs)
    });
    // res.sendFile(path.join(__dirname, '../views/blogs.html'))
    res.render('blogs',{ blogs:blogs })
})


router.get('/blog/:id', (req, res)=>{
    blog = blogs.blogs.filter((e) => {
        return e.id == req.params.id;
    })

    console.log(blog[0])
    res.render('singleBlog',{ blog:blog[0] })
})

module.exports = router