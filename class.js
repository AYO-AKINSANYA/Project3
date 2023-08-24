class Rectangle {
    constructor(length, breadth, height) {
        this.length = length
        this.breadth = breadth
        this.height = height
    }

    area() {
        return this.length * this.breadth
    }

    perimeter() {
        return 2 * (this.length + this.breadth)
    }

    volume() {
        return this.length * this.breadth * this.height
    }
}

const rectangleVal = new Rectangle(6, 10, 5)

console.log(rectangleVal.area())
console.log(rectangleVal.perimeter())
// console.log(rectangleVal.volume())

// const calcVolume = new Rectangle(5, 6, 7)
// console.log(calcVolume.volume())

// console.log(new Rectangle(5, 6).area())
// console.log(new Rectangle(5, 6).perimeter())
// console.log(new Rectangle(5, 6, 7).volume())

// async randomCalc() {

//     const area = this.area

//     const perimeter = this.perimeter

//     return await(area + perimeter)
// }

// console.log(rectangleVal.randomCalc())

// static squaredSides(length, breadth) {
//     return (length ** 2) + (breadth ** 2)
// }

// console.log(Rectangle.squaredSides(9, 10))
