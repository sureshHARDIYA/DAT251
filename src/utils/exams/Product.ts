class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number,
        public dimensions: {
            height: number
            weight: number
            width: number
            length: number
        }
    ) {}

    calculateVolume(): number {
        return (
            this.dimensions.height *
            this.dimensions.width *
            this.dimensions.length
        )
    }
}

export default Product
