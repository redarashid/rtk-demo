//configureStore عن طريق store  انشاء
const configureStore = require("@reduxjs/toolkit").configureStore;
// const {createLogger} = require("redux-logger")
const cakeReducer = require("../features/cake/cakeSlice");
const sweetsReducer = require("../features/sweets/sweetSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    sweets: sweetsReducer,
  },
  middleware: (getDefaultMiddle) => getDefaultMiddle().concat(logger),
});

module.exports = store;
