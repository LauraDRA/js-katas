export function kata1 (number) {
    //Convert number to array of numbers
    let arrayNumber = [...number.toString()]

    //Sort array in descending order:
    arrayNumber.sort((a,b)=>{return b-a})

    //Generate new number
    return parseInt(arrayNumber.join(''))
}
