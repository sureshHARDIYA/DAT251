import Product from './Product'

export interface ShippingCondition {
    condition: string
    volumeThreshold: number
    weightThreshold: number
    cost: number
}

export const shippingConditions: ShippingCondition[] = [
    {
        condition: 'Small Item',
        volumeThreshold: 1000,
        weightThreshold: 10,
        cost: 50,
    },
    {
        condition: 'Medium Item',
        volumeThreshold: 5000,
        weightThreshold: 20,
        cost: 100,
    },
    {
        condition: 'Large Item',
        volumeThreshold: 10000,
        weightThreshold: 30,
        cost: 150,
    },
    {
        condition: 'Extra Large Item',
        volumeThreshold: 20000,
        weightThreshold: 40,
        cost: 200,
    },
    {
        condition: 'Ultra Large Item',
        volumeThreshold: 30000,
        weightThreshold: 50,
        cost: 250,
    },
]

class ShippingCalculator {
    private shippingConditions = shippingConditions

    calculateShippingCost(
        productList: Product[]
    ): { productName: string; shippingCost: number }[] {
        const shippingCosts = productList.map((product) => {
            const volume = product.calculateVolume()
            const weight = product.dimensions.weight

            const matchedCondition = this.shippingConditions.find(
                (condition) =>
                    volume <= condition.volumeThreshold &&
                    weight <= condition.weightThreshold
            )

            const cost = matchedCondition ? matchedCondition.cost : 200

            return {
                productName: product.name,
                shippingCost: cost * product.quantity,
            }
        })

        return shippingCosts
    }
}

export default ShippingCalculator
