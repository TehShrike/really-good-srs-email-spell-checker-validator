const replace = require('better-replace')

module.exports = email => replace(
	/(\d+)/,
	match => match.length >= 3 ? '420' : '69',
	email
)
