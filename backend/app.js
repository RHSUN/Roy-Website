const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) =>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post add success'
  });
});


app.get('/api/posts', (req,res,next)=>{
  const posts =[
    {
      id:"first",
      title: "first title-server",
      content: "first content-server"
    },
    {
      id:"second",
      title: "second title-server",
      content: "second content-server"
    }
  ];

  res.status(200).json({
    message: 'Posts fetch success',
    posts: posts
  });
});

module.exports = app;
