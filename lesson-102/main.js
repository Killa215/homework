// const users = {
// 	alex: {
// 		name: 'Alex',
// 		age: 23,
// 		isAdmin: false,
// 	},
// 	john: {
// 		age: 33,
// 		isAdmin: true,
// 		sayHello(name) {
// 			console.log(`Hello ${name}`)
// 		},
// 	},
// }

// console.log(users.john)
// users.john.sayHello('AAA')

const users = [
	{
		name: 'Alex',
		age: 23,
		isAdmin: false,
	},
	{
		name: 'John',
		age: 30,
		isAdmin: true,
	},
]

users.push({
	name: 'Ivan ',
	age: 30,
	isAdmin: true,
})

for (let i = 0; i < users.length; i++) {
	console.log(users[i])
}
