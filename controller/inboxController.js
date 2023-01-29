function getInbox(req, res, next) {
    res.render('inbox', {
        title: 'inbox and chat app',
    })
}

module.exports = {
    getInbox
}








