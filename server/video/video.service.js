const configs = require('../../config/config');
const { S3 } = require('aws-sdk');
const s3 = new S3({
  endpoint: configs.endpoint_url, // Put you region
  accessKeyId: configs.access_key, // Put you accessKeyId
  secretAccessKey: configs.secret_key, // Put you accessKeyId
  Bucket: configs.video_bucket, // Put your bucket name
  signatureVersion: 'v4',
  region: configs.region, // Put you region
  //   apiVersion: '2006-03-01'
});
async function getVideos() {
  return new Promise(async (resolve, reject) => {
    try {
      const bucketParams = { Bucket: configs.video_bucket };
      s3.listObjects(bucketParams, async function (err, data) {
        if (err) {
          console.log('Error', err);
          reject(err);
        } else {
          resolve(data.Contents);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
async function getVideo({ key, res, range }) {
  return new Promise(async (resolve, reject) => {
    try {
      const bucketParams = { Bucket: configs.video_bucket, Key: key };
      s3.headObject(bucketParams, async function (err, data) {
        if (err) {
          reject(err);
          console.log('Error', err);
        } else {
          //   console.log('Success', data);
          if (!range) {
            reject('Requires Range header');
          }
          const videoSize = data.ContentLength;
          const CHUNK_SIZE = 10 ** 7; // 1MB
          const start = Number(range.replace(/\D/g, ''));
          const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
          const contentLength = end - start + 1;
          const headers = {
            'Content-Range': `bytes ${start}-${end}/${videoSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4',
          };
          res.writeHead(206, headers);
          const videoStream = await s3
            .getObject({
              ...bucketParams,
              Range: `bytes=${start}-${end}`,
            })
            .createReadStream();
          videoStream.pipe(res);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = {
  getVideos,
  getVideo,
};
