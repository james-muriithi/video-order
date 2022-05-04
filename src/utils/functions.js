function parseTweetUrl(url) {
    const parts = url.match(/(^|[^'"])(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/);
    try {
        const tweetId = parts[4]
        const quotedRepliesLink = `https://twitter.com/search?q=-from:quoted_replies%20url:${tweetId}`
        return {quotedRepliesLink, tweetId};

    } catch (error) {
        return { quotedRepliesLink: true, tweetId: null };
    }
}

export {
    parseTweetUrl,
}