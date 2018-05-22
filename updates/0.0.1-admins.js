require('dotenv').config()

const { ADMIN_USER, ADMIN_PASSWORD } = process.env

if (ADMIN_USER && ADMIN_PASSWORD) {
	exports.create = {
		User: [
			{
				'name.first': 'Admin',
				'name.last': 'User',
				'email': ADMIN_USER,
				'password': ADMIN_PASSWORD,
				'isAdmin': true
			}
		]
	}
}
