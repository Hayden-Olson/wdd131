function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	const errorElement = document.querySelector('.errorMsg')
	errorElement.hidden = false
	errorElement.innerText = msg
}
function isDateInFuture(year, month) {
	return new Date() < new Date(year, month + 1, 0)
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	const value = new FormData(event.target)
	console.log(event.currentTarget)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN((value.get('cardNumber')))) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(value.get('cardNumber'))) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (isDateInFuture((value.get('year')),+ (value.get('month'))) === false) {
		errorMsg += 'Expired Card\n'
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	console.log('success')
	return true

}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)