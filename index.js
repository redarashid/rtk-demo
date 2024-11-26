const cakeActions = require("./features/cake/cakeSlice").cakeActions
const sweetsActions = require("./features/sweets/sweetSlice").sweetsActions

const store = require("./app/store")
const fetchUsers = require("./features/user/userSlice").fetchUsers

console.log("Initial state", store.getState());

const unsubscrib = store.subscribe(()=> {
    console.log("Update State", store.getState())
})

store.dispatch(fetchUsers())


// store.dispatch(cakeActions.sell())
// store.dispatch(cakeActions.sell())
// store.dispatch(cakeActions.reStocked(2))

// store.dispatch(sweetsActions.requist())
// store.dispatch(sweetsActions.requist())
// store.dispatch(sweetsActions.increNum(4))

// unsubscrib()