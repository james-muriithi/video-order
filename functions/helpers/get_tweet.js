const { client } = require('./twitter_client');

const getTweet = (id) => {
    return client.get('statuses/show/', { id, tweet_mode: 'extended' });
}

module.exports = getTweet

