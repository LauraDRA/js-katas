export function kata2 (obj, def, path) {

    // Without path parameters return function
    if(!path){
        return (path) => kata2(obj, def, path)
    }

    let paramsPath = path.split('.')

    if(Object.keys(obj).indexOf(paramsPath[0]) === -1){
        return def;
    }

    let valueFound = obj[paramsPath[0]];

    return paramsPath.length === 1
        ? valueFound
        : kata2(valueFound, def, (paramsPath.splice(1, paramsPath.length-1)).join('.'));
}