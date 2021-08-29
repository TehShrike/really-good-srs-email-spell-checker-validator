export default email => {
	const suggestion = email.replaceAll(
		/(\d+)/g, 
		match => match.length >= 3 ? '420' : '69'
	)

	return suggestion === email ? null : suggestion
}
