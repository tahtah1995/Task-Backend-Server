const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
router.get("/", async(req, res) => {
 try{
const posts = await Post.find();
res.json(posts);
 }
 catch(err){
   res.json({message:err});
 }
});

router.post('/', async (req, res) => {
  const post = new Post({
    Name: req.body.Name,
    Department: req.body.Department,
    Mobile: req.body.Mobile,
    Days: req.body.Days,
  });
 try{
   const savedPost = await post.save();
   res.json(savedPost);
 } catch(err){
res.json({message:err});
 }
});


router.get('/:postId' ,async (req,res)=>{
  try{
  const post = await Post.findById(req.params.postId)
  res.json(post);
}
catch(err){
  res.json({message:err})
}

})


router.delete('/:Name' ,async (req,res)=>{
  try{
 const removePost = await Post.remove({Name:req.params.Name})
 res.json(removePost);
}
catch(err){
  res.json({message:err})
}

})

module.exports = router;
