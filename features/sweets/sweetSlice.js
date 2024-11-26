const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    totalOfSweets: 18,
}

const sweetSlice = createSlice({
    name: "sweets",
    initialState,
    reducers: {
        requist: (state)=> {
            state.totalOfSweets--;
        },
        increNum: (state, action)=> {
            state.totalOfSweets += action.payload;
        },
        // extrReducer: {
        //     ["cake/sell"]: (state)=> {
        //         state.totalOfSweets--;
        //     }
        // }
        extraReducer: (builder)=> {
            builder.addCase(cakeActions.sell, (state)=> {
                state.totalOfSweets--;
            })
        }
    }
})

module.exports = sweetSlice.reducer;
module.exports.sweetsActions = sweetSlice.actions;