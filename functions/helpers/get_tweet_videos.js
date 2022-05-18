const getTweet = require('./get_tweet');

const getVideos = async (id) => {
    let tweet = await getTweet(id)
    if (tweet.extended_entities && tweet.extended_entities.media) {
        const media_array = tweet.extended_entities.media

        let video_array = []

        media_array.forEach(media => {
            let video = { type: media.type }
            let info = media.video_info
            if (media.type == 'video') video['duration'] = info.duration_millis
            if (media.type != 'video' && media.type != 'animated_gif') return

            video['variants'] = info.variants.filter(item => {
                return item.content_type === 'video/mp4'
            })

            video_array.push(video)
        });
        return video_array
    }
    return []
}


module.exports = getVideos