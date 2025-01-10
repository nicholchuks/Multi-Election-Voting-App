// import { configureStore } from "@reduxjs/toolkit";

// import uiSlice from "./ui-slice";


// const store = configureStore({
//     reducer: {ui: uiSlice.reducer}
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
