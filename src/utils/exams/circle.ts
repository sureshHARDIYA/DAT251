class Circle {
    private radius: number

    constructor(radius: number) {
        if (radius < 0) {
            throw new Error('Radius must be a non-negative number.')
        }

        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

export default Circle
