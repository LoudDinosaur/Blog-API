//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req,res) =>{
    try{
             //-> Ye ek aur tarika  to save the data without using await.create library of mongoose
                  //todo list waala method bhi yahaan use kr sakte hain

        //fetch data from request ki body
        const{post,user,body} = req.body;
        //create comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new object into the database
        const savedComment = await comment.save();

        //find the post by id , add the new comment to the comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: updatedPost,
        });
    }

    catch(err){
        return res.status(500).json({
            error:"Error while creating comment",
        })
    }
}