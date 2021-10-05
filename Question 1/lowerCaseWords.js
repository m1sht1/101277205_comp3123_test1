function lowerCaseWords(array){   
    return new Promise(function (resolve,reject){
    var newArray=[]
    var i=0
    for(let item in array){
        if(isNaN(array[item]) == true){
            newArray[i] = array[item]
            i++
        }
    }    

    userCaseArray = newArray.map(w => w.toLowerCase())
    resolve(userCaseArray)   
    })
}
const mixedArray=['PIZZA',10,true,25,false,'Wings']
console.log(lowerCaseWords(mixedArray))