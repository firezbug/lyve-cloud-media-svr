import axios from 'axios';
import { request } from '../utils/request';
import { v4 as uuidv4 } from 'uuid';

export default async function S3BucketUploader({ videoFile, keyPrefix }) {
  try {
    console.log('upload is running');
    if (videoFile) {
      const metadata = {
        path: '/videos/get-video-upload-url',
        method: 'POST',
      };
      const productImageKey = `${videoFile.name}`;
      const data = {
        key: productImageKey,
        type: videoFile.type,
      };

      const { data: preSignedUrl } = await request(metadata, data, true);

      var options = {
        headers: {
          'Content-Type': videoFile.type,
        },
      };

      await axios.put(preSignedUrl, videoFile, options);

      return productImageKey;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
