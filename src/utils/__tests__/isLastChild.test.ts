import isLastChild from "../isLastChild"

it('should return true if its a last child of an array', () => {
    const testArray = ['One', 'Two', 'Three']
    expect(isLastChild(testArray, 0)).toBe(false)
})