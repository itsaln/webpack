import './assets/scss/globals.scss'

const num: number = 123

console.log('Js console', num)

const obj = {
	one: {
		two: {
			three: 'awooooooooo'
		}
	}
}

function woof(noise: any) {
	console.log(noise)
}

woof(obj)
