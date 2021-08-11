function calculator(action,value){
    
    if (action === 'action') {

        if (value === 'c' ){
            document.getElementById('result').value = ' '
        }

        if ( '/' ===  value || value === '*' || value === '-' || value ===  '+' || value === '.'){
            document.getElementById('result').value += value
        }

        if (value === '='){
            let equal = eval(document.getElementById('result').value)
            document.getElementById('result').value = equal
        }
        

    }else if(action === 'value'){

        var field_valuer = document.getElementById('result').value
        document.getElementById('result').value = field_valuer + value // Recupera a strig e concatena com o numero
        //outra forma document.getElementById('result').value += value 

    } 
} 