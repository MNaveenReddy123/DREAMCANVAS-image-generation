import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;
const HF_API_URL = 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev';

// Function to retry the request
const fetchImage = async (prompt, retries = 3, delay = 1000) => {
  try {
    const headers = {
      'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
      'Content-Type': 'application/json',
    };

    const body = {
      inputs: prompt,
    };

    const response = await axios.post(HF_API_URL, body, { headers, responseType: 'arraybuffer' });

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    return base64Image;
  } catch (error) {
    if (error.response?.status === 503 && retries > 0) {
      console.log('Model is unavailable, retrying...');
      await new Promise(res => setTimeout(res, delay));
      return await fetchImage(prompt, retries - 1, delay);
    } else {
      throw error;
    }
  }
};

// Route for generating image
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const base64Image = await fetchImage(prompt);

    if (base64Image) {
      res.status(200).json({ photo: base64Image });
    } else {
      res.status(500).json({ error: 'Image generation failed, no data returned' });
    }
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router;
