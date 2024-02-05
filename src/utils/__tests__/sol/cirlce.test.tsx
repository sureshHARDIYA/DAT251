import Circle from '../../exams/circle'

describe('Circle', () => {
    it('should calculate the area correctly', () => {
        const circle = new Circle(5)

        const area = circle.calculateArea()

        expect(area).toBeCloseTo(78.54, 2)
    })

    it('should calculate the perimeter correctly', () => {
        const circle = new Circle(5)

        const perimeter = circle.calculatePerimeter()

        expect(perimeter).toBeCloseTo(31.42, 2) // Expecting the perimeter to be approximately 31.42
    })

    it('should throw an error for negative radius', () => {
        expect(() => new Circle(-5)).toThrow(
            'Radius must be a non-negative number.'
        )
    })
})
