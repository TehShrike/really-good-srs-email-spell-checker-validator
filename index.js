const replace = require('better-replace')

module.exports = email => {
	const suggestion = replace(
		/(\d+)/,
		match => match.length >= 3 ? '420' : '69',
		email
	)

	return suggestion === email ? null : suggestion
}
