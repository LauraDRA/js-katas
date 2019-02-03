export function kata3 (n, m) {
    let arrayResult = [],
        squareResult;

    const getDivisorSquare = (number) => {
        let divisors= []
        for(let i=1; i<=number; i++){
            if(number%i === 0){
                divisors.push(i)
            }
        }

        let squaredDivisors = divisors.map((item) => Math.pow(item, 2))
        let summatory = squaredDivisors.reduce((a, b) => a + b, 0)
        let isValidSquare = Number.isInteger(Math.sqrt(summatory))
        return isValidSquare ? [number, summatory] : []
    }

    for(let i=n; i<=m; i++){
        squareResult = getDivisorSquare(i)
        if(squareResult.length > 0){
            arrayResult.push(squareResult)
        }
    }
    return arrayResult
}
