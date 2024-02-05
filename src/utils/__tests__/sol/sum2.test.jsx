import { describe, it, expect } from '@jest/globals'

class Calculator {
    add(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            throw new Error('Both arguments should be numbers')
        }

        return number1 + number2
    }
}

describe('Function to add sum of two numbers', () => {
    const calculator = new Calculator()

    it('sum of two numbers', () => {
        const result = calculator.add(10, 20)
        expect(result).toBe(30)
    })

    it('should fail if both are not numbers', () => {
        // Use a function to wrap the code that might throw an error
        const testFunction = () => {
            calculator.add('10', 20)
        }

        expect(testFunction).toThrowError('Both arguments should be numbers')
    })
})
