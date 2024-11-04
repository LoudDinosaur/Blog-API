# Blog-API

A simple blog application built with **Express**, **MongoDB Atlas**, and **Mongoose**. This app allows users to create posts, comment on them, and like/unlike posts.

## 🔧 Features
- Create and manage blog posts
- Comment on posts
- Like and unlike posts
- Retrieve all posts

## 🛠️ Tech Stack
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB Atlas**: Cloud database
- **Mongoose**: ODM for MongoDB
- **Nodemon**: Development tool for auto-reloading

##📡 API Endpoints
1. POST **/comments/create**: Create a comment
2. POST **/posts/create**: Create a post
3. POST **/likes/like**: Like a post
4. POST **/likes/unlike**: Unlike a post
5. GET **/posts**: Retrieve all posts

📚 Usage
1. **Create Post**: Send a POST request to /posts/create with post data.
2. **Comment**: Send a POST request to /comments/create with comment data.
3. **Like Post**: Send a POST request to /likes/like with post ID.
4.** Unlike Post**: Send a POST request to /likes/unlike with post ID.
5. **Get All Posts**: Send a GET request to /posts.
