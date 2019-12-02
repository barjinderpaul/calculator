let expression = "";

function setTextArea() {
    let resultField = document.getElementById('result');
    resultField.value  = '0';    
}

function clearResult() {
    let resultField = document.getElementById('result');
    resultField.value = '0';
}

function setValueTextArea(value) {
    let resultField = document.getElementById('result');
    if(resultField.value === '0'){
        resultField.value = '';
    }
    resultField.value += value
}

function backspace() {
    let resultField = document.getElementById('result');
    if( resultField.value !== '0' ) {
        let inputText = resultField.value;
        inputText = inputText.substring(0,inputText.length - 1);
        resultField.value  = inputText
        if(resultField.value.length === 0 ){
            resultField.value = '0';
        }
    }
    
}

function addToExpression(operator) {
    let resultField = document.getElementById('result');
    expression = expression + ' ' +resultField.value + ' ' +operator
    resultField.value = '0'
}

function showResult() {
    let resultField = document.getElementById('result');
    expression = expression + ' ' + resultField.value
    // alert(expression)
    let ans = eval(expression)
    
    resultField.value = ans
    
    expression = ''
}