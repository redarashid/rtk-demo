const creatSlice = require("@reduxjs/toolkit").creatSlice;
const axios = require("axios");
const creatAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const fetchUsers = creatAsyncThunk("user/userFetch", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

const intialState = {
  loading: false,
  data: [],
  error: "",
};

const userSlice = creatSlice({
  name: "user",
  intialState,
  extraReducer: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

module.exports.userSlice = userSlice.reducer;

module.exports.fetchUsers = fetchUsers;