const express =  require('express');
const app = express()

const posts = [
    {id: 1, title: "Post1" },
    {id: 2, title: "Post2" },
    {id: 3, title: "Post3" },
    {id: 4, title: "Post4" },
]

app.get('/api/post', (req, res)=>{
    res.send(posts)
})

//Restfull servises
app.get('/api/post/:id', (req, res)=>{
    const post = posts.find(c => c.id === parseInt(req.params.id))
    if(!post){
        res.send("Sorry")
    }
    res.send(post)
})
//understand the params
// app.get('/api/post/:year/:month', (req, res)=>{
//     res.send(req.params)
// })
//let me introduce

const port = 8080;
app.listen(port, ()=>console.log(`server is running at http://localhost:${port}`))