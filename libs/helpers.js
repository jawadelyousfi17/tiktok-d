function isValidTiktokUrl(url)   {
    if(!url.includes('tiktok')) return false
    return true
}

module.exports = {isValidTiktokUrl}