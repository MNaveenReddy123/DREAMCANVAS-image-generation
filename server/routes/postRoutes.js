import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// cloudinary.config({
//   cloudinary_url: process.env.CLOUDINARY_URL
// });

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    // console.log(name);
    console.log('Received photo:', photo);
    const photoUrl = await cloudinary.uploader.upload(photo);
    // console.log(photoUrl.url);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    newPost.save();

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    console.error('Error uploading to Cloudinary:', err); // Log the error
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;
