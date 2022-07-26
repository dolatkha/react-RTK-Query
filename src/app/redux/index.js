import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./services/postsApi";



export default configureStore({
  reducer: {
    [postApi.reducerPath]:postApi.reducer
  },
  middleware:(getDefaultMiddleware)=>(
    getDefaultMiddleware().concat(postApi.middleware)
  ),
});
