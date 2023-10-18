"use client"

export const Web3Script = () => {
	const handleSubmit = (e) => {
		const form = document.getElementById("form")
		const result = document.getElementById("result")
		const hCaptcha = form.querySelector(
			"textarea[name=h-captcha-response]"
		).value

		e.preventDefault()

		if (!hCaptcha) {
			e.preventDefault()
			result.classList.add("text-red-500")
			result.innerHTML = "Please fill out captcha field."
			return
		}

		form.classList.add("was-validated")
		if (!form.checkValidity()) {
			form.querySelectorAll(":invalid")[0].focus()
			return
		}
		const formData = new FormData(form)
		const object = Object.fromEntries(formData)
		const json = JSON.stringify(object)

		result.innerHTML = "Sending..."

		fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		})
			.then(async (response) => {
				let json = await response.json()
				if (response.status == 200) {
					result.classList.add("text-green-500")
					result.innerHTML = json.message
				} else {
					console.log(response)
					result.classList.add("text-red-500")
					result.innerHTML = json.message
				}
			})
			.catch((error) => {
				console.log(error)
				result.innerHTML = "Something went wrong!"
			})
			.then(function () {
				form.reset()
				form.classList.remove("was-validated")
				setTimeout(() => {
					result.style.display = "none"
				}, 5000)
			})
	}

	return (
		<div
			id='contact'
			className='card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100'
		>
			<form
				action='https://api.web3forms.com/submit'
				method='POST'
				id='form'
				className='card-body'
				noValidate
				onSubmit={handleSubmit}
			>
				<input
					type='hidden'
					name='access_key'
					value='f3cad2fe-3990-4bad-b33b-1ba08a1ab435'
				/>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Name *</span>
					</label>
					<input
						type='text'
						placeholder='Jane Doe'
						className='input input-bordered'
						required
						name='name'
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Address</span>
					</label>
					<input
						type='text'
						placeholder='123 Main St.'
						className='input input-bordered'
						name='address'
					/>
				</div>
				<div className='form-control'>
					<label className='label' htmlFor='email_address'>
						<span className='label-text'>Email *</span>
					</label>
					<input
						id='email_address'
						type='email'
						name='email'
						className='input input-bordered'
						required
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Phone</span>
					</label>
					<input
						type='tel'
						placeholder='123-456-7890'
						className='input input-bordered'
						name='phone'
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Your Message *</span>
					</label>
					<textarea
						className='textarea textarea-bordered'
						rows={5}
						required
						name='message'
					></textarea>
				</div>
				<div className='h-captcha mt-2' data-captcha='true'></div>
				<div className='form-control'>
					<button type='submit' className='btn btn-accent'>
						Submit
					</button>
					<div id='result' className='mt-3 text-center'></div>
				</div>
			</form>
		</div>
	)
}
