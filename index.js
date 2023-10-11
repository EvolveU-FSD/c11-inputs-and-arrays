
function getOp(elementName) {
    const op1 = document.getElementById(elementName)
    return Number(op1.value)
}

function storeAnswer(elementName, value) {
    const answer = document.getElementById(elementName)
    answer.value = value
}

function add() {
    let c = getOp('op1') + getOp('op2')
    storeAnswer('answer', c)
}

function subtract() {
    let c = getOp('op1') - getOp('op2')
    storeAnswer('answer', c)
}