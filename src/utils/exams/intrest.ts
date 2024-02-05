class InterestCalculator {
    private principal: number
    private rate: number
    private time: number

    constructor(principal: number, rate: number, time: number) {
        this.principal = principal
        this.rate = rate
        this.time = time
    }

    calculateSimpleInterest(): number {
        const simpleInterest: number =
            (this.principal * this.rate * this.time) / 100
        return simpleInterest
    }

    calculateCompoundInterest(): number {
        const compoundInterest: number =
            this.principal * Math.pow(1 + this.rate / 100, this.time) -
            this.principal
        return compoundInterest
    }
}

export default InterestCalculator

// const interestCalculator = new InterestCalculator(1000, 5, 2)
