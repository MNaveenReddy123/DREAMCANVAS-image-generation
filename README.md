# DREAMCANVAS

DREAMCANVAS is an AI-powered image generation platform that enables users to create stunning and imaginative images using the FLUX.1 model. Users can generate images based on prompts and share them with the community.

## Features
- AI-powered image generation using FLUX.1
- Search and browse through community-shared images
- User-friendly interface for generating and sharing images
- Cloud-based image storage using Cloudinary
- MongoDB for storing image metadata

## Live Demo
Check out the live demo:
- **Frontend:** [DREAMCANVAS Frontend](https://client-nine-umber-68.vercel.app/)
- **Backend:** [DREAMCANVAS Backend](https://dreamcanvas-61xy.onrender.com)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/DREAMCANVAS.git
   ```
2. Navigate to the project directory:
   ```sh
   cd DREAMCANVAS
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Backend Setup
Ensure you have the backend server running:
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

## Image Upload and Storage
DREAMCANVAS uses Cloudinary for storing generated images and MongoDB for storing image metadata. Images are uploaded to Cloudinary, and their URLs, along with related information (name and prompt), are saved in MongoDB.

## Deployment
### Deployment Steps
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to a hosting service like Vercel, Netlify, or Firebase for the frontend.
3. Deploy the backend using a service like Render or Heroku.

## Contributing
Feel free to contribute to DREAMCANVAS by creating a pull request.

## License
This project is licensed under the MIT License.

