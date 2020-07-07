// From array processes get:
//      - Array with elements that have status 'approved'. Value should be greater by 10
//      - Array with elements that have status 'declined'. Set it's value to 0



const processes = [
    {status: 'approved', value: '15'},
    {status: 'declined', value: '153'},
    {status: 'approved', value: '125'},
    {status: 'approved', value: '1599'},
    {status: 'declined', value: '5'},
    {status: 'approved', value: '65'},
    {status: 'ready to approve', value: '97'},
    {status: 'approved', value: '1'},
    {status: 'declined', value: '23'},
    {status: 'approved', value: '51'},
    {status: 'approved', value: '82'},
]

const approvedElements = []

const declinedElements = []

console.log(approvedElements)
console.log(declinedElements)
