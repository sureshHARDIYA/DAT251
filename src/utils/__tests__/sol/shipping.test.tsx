import Product from '../../exams/Product'
import ShippingCalculator from '../../exams/shipping'

describe('ShippingCalculator', () => {
    let shippingCalculator: ShippingCalculator

    const products: Product[] = [
        new Product('Small Widget', 20, 2, {
            height: 5,
            weight: 5,
            width: 5,
            length: 5,
        }),
        new Product('Large Gadget', 50, 1, {
            height: 15,
            weight: 10,
            width: 10,
            length: 15,
        }),
    ]

    beforeEach(() => {
        shippingCalculator = new ShippingCalculator()
    })

    it('should calculate shipping costs correctly for each product', () => {
        const expectedShippingCosts = [
            { productName: 'Small Widget', shippingCost: 100 },
            { productName: 'Large Gadget', shippingCost: 100 },
        ]

        const actualShippingCosts =
            shippingCalculator.calculateShippingCost(products)

        expect(actualShippingCosts).toEqual(expectedShippingCosts)
    })

    it('should handle cases where products exceed shipping conditions', () => {
        const modifiedProducts: Product[] = [
            new Product('Oversized Widget', 20, 1, {
                height: 20,
                weight: 15,
                width: 15,
                length: 20,
            }),
        ]

        const expectedShippingCosts = [
            { productName: 'Oversized Widget', shippingCost: 150 },
        ]

        const actualShippingCosts =
            shippingCalculator.calculateShippingCost(modifiedProducts)

        expect(actualShippingCosts).toEqual(expectedShippingCosts)
    })
})
