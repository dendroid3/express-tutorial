const products = []

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit amet, error perspiciatis, ut ab voluptatem facere nisi commodi odit impedit illum repellat? Eum necessitatibus in ratione, facere corrupti blanditiis beatae, ad, rem sapiente et numquam! Dolores, quia ullam voluptates ipsum, incidunt dicta, voluptatibus molestias architecto necessitatibus consequatur ut repellat?'

const people = []

const getDescription = () => {
    return lorem.slice(0, Math.floor(Math.random() * 200))
}

const getPrice = () => {
    return Math.floor(Math.random() * 1000)
}

for (let index = 0; index < 10; index++) {
    const product = {
        name: `Product ${index}`,
        id: `${index}`,
        price: getPrice(),
        description: getDescription()
    }
    const person = {
        name: `person_${index + 1}`,
        id: `${index + 1}`
    }
    people.push(person)
    products.push(product)
}

module.exports = {products, people}
