require('dotenv').config()

const keystone = require('keystone')

keystone.init({
	auth: true,
	'auto update': true,
	name: process.env.NAME || 'keystone-docker',
	brand: process.env.NAME || 'keystone-docker',
	session: process.env.COOKIE_SECRET || false,
	'user model': process.env.USER_MODEL || 'User',
	mongo: process.env.MONGODB || 'mongodb://localhost:27017'
})

keystone.import('/models')

keystone.set('nav', {
	users: 'users'
})

keystone.start()
