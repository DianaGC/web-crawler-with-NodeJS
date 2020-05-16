const getNumberFromString = (string, valueToReplace) =>{
    return string !== 'discuss' ? Number(string.replace(valueToReplace, "")): 0; 
};


module.exports ={getNumberFromString}
