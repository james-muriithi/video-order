const functions = require("firebase-functions");
const getVideos = require("./helpers/get_tweet_videos");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getVideos = functions.https.onCall(async(data) => {
  const { tweetId } = data
  try {
    return await getVideos(tweetId);
  } catch (error) {
    console.log(error);
    return []
  }
});
