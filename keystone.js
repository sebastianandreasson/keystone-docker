require('dotenv').config()

const keystone = require('keystone')
const proxy = require('http-proxy-middleware')

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
	admin: 'users',
	models: process.env.NAV ? process.env.NAV.split(',') : ''
})

keystone.set('routes', (app) => {
	app.get('/', (req, res) => res.redirect('/keystone'))
	app.get('/ping', (req, res) => res.send(200))
	if (process.env.PROXY && process.env.PROXY_HOST) {
		app.use(process.env.PROXY, proxy({
			target: process.env.PROXY_HOST
		}))
	}
})

keystone.start()
