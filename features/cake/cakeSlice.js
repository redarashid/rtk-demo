const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numberOfCake: 14,
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        sell: (state)=> {
            state.numberOfCake--;
        },
        reStocked: (state, action)=> {
            state.numberOfCake += action.payload;
        },
    },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions; 
