function getUsers(req, res, next) {
    res.render('users', {
        title: 'Users and chat app',
    })
}

module.exports = {
    getUsers
}








