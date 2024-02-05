const add = (number1: number, number2: number) => {
    return number1 + number2
}

describe('Function to add sum of two number', () => {
    it('sum of two number', () => {
        const result = add(10, 20)
        expect(result).toBe(30)
    })
})
