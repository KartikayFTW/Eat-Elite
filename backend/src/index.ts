import { app } from './app';
import connectToDB from './db';
import { v2 as cloudinary } from 'cloudinary';

const PORT = process.env.PORT || 8000;
connectToDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    server.on('error', (error) => {
      console.error('Server error:', error);
    });
  })
  .catch((err) => {
    console.log('MONGO DB CONNECTION_ERROR ', err);
  });
