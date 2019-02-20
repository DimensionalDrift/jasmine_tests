fizzbuzz = function(num) {
    divis3 = num/3
    divis5 = num/5
    
    if (typeof num != 'number'){
        return 'NaN'
    }

    else if ((Number.isInteger(divis3)) && (Number.isInteger(divis5))){
        return 'FizzBuzz';
    }
    
    else if (Number.isInteger(divis3)){
        return 'Fizz'
    }
    
    else if (Number.isInteger(divis5)){
        return 'Buzz'
    }
     
    else {// else if ((!Number.isInteger(divis3)) && (!Number.isInteger(divis5))){
        return num;
    }

}
