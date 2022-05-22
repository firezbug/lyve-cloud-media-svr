const VideoService = require('./video.service');
const Response = require('../helpers/response');

async function getVideos(req, res) {
  try {
    const videos = await VideoService.getVideos();
    Response.success(res, 'Successfully fetched the videos', videos);
    // next();
  } catch (errRes) {
    console.log({ errRes });
    Response.failRequest(res, 'Failed to get the videos', errRes.error);
    // next();
  }
}

async function getVideo(req, res) {
  try {
    const { key } = req.params;
    const range = req.headers.range;
    await VideoService.getVideo({ key, res, range });
    // next();
  } catch (errRes) {
    console.log({ errRes });
    Response.failRequest(res, 'Failed to get the video', errRes.error);
    // next();
  }
}
module.exports = {
  getVideos,
  getVideo,
};
