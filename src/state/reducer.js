// ACTION TYPES
const UPDATE_ADDRESS_LINE_ONE = 'UPDATE_ADDRESS_LINE_ONE';
const UPDATE_ADDRESS_LINE_THREE = 'UPDATE_ADDRESS_LINE_THREE';
const UPDATE_ADDRESS_LINE_TWO = 'UPDATE_ADDRESS_LINE_TWO';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_FIRST_NAME = 'FIRST_NAME';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_LAST_NAME = 'LAST_NAME';
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT';

// INITIAL STATE
let initialState = {
    addressOne: '',
    addressThree: '',
    addressTwo: '',
    city: '',
    cost: 0,
    credit: '',
    downPayment: 0,
    email: '',
    firstName: '',
    found: "false",
    history: '',
    lastName: '',
    loanType: 'Home Purchase',
    propToBeUsedOn: '',
    propertyType: 'Single Family Home',
    realEstateAgent: "false"
}

// ACTION CREATORS
export function updateAddressLineOne(addressLineOne) {
    return {
        type: UPDATE_ADDRESS_LINE_ONE,
        payload: addressLineOne
    }
}

export function updateAddressLineTwo(addressLineTwo) {
    return {
        type: UPDATE_ADDRESS_LINE_TWO,
        payload: addressLineTwo
    }
}

export function updateAddressLineThree(addressLineThree) {
    return {
        type: UPDATE_ADDRESS_LINE_THREE,
        payload: addressLineThree
    }
}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateDownPayment(payment) {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: payment
    }
}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}

export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updateLastName(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateRealEstateAgent(agent) {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: agent
    }
}


// RECUDER
function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_ADDRESS_LINE_ONE:
            return Object.assign({}, state, { addressOne: action.payload })
        case UPDATE_ADDRESS_LINE_TWO:
            return Object.assign({}, state, { addressTwo: action.payload })
        case UPDATE_ADDRESS_LINE_THREE:
            return Object.assign({}, state, { addressThree: action.payload })
        case UPDATE_COST:
            return Object.assign({}, state, { cost: action.payload })
        case UPDATE_CREDIT:
            return Object.assign({}, state, { credit: action.payload })
        case UPDATE_DOWN_PAYMENT:
            return Object.assign({}, state, { downPayment: action.payload })
        case UPDATE_FIRST_NAME:
        case UPDATE_EMAIL:
            return Object.assign({}, state, { email: action.payload })
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload})
        case UPDATE_HISTORY:
            return Object.assign({}, state, { history: action.payload })
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload})
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, { loanType: action.payload })
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state,  { propertyType: action.payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })
        case UPDATE_FOUND:
            return Object.assign({}, state, { found: action.payload })
        case UPDATE_PROP:
            return Object.assign({}, state, { propToBeUsedOn: action.payload })
        case UPDATE_REAL_ESTATE_AGENT:
            return Object.assign({}, state, { realEstateAgent: action.payload })
        default: {
            return state;
        }
    }
}

export default reducer;