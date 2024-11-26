//configureStore عن طريق store  انشاء
const configureStore = require("@reduxjs/toolkit").configureStore;
// const {createLogger} = require("redux-logger")
const cakeReducer = require("../features/cake/cakeSlice");
const sweetsReducer = require("../features/sweets/sweetSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
const userReducer = require("../features/user/userSlice")

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    sweets: sweetsReducer,
    user: userReducer,
  },
  // prepend=> يُضاف Middleware إلى بداية القائمة بدلًا من نهايتها، وهذا يوفر نفس ميزة الحفاظ على الأنواع.
  // middleware: (getDefaultMiddle) => getDefaultMiddle().prepend(logger),
});

module.exports = store;
