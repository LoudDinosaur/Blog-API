//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post
exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes: savedLike._id}}, {new:true})
        .populate("likes").exec();

        res.json({
            post:updatePost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error while Liking Post",
        });
    }
}

//Unlike a post
exports.unlikePost = async (req,res) => {
    try{
        const{post,like} = req.body;
        //find and delete from like colection se
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        //update the post collection
        const updatePost = await Post.findByIdAndUpdate(post, {$pull: {likes:deletedLike._id}}, {new:true});
                                                                    //likes ke andar deletedLike._id ko delete krna chahta hoon


       res.json({
        post:updatePost,
       })
    }
    catch(err){
        return res.status(500).json({
            error:"Error while Unliking Post",
        });
    }
}