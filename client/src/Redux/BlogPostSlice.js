import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: {},
};

const blogPostSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlogPost(state, action) {
      state.blogs = action.payload;
    },
  },
});

export default blogPostSlice.reducer;

//Actions
export function getBlogPost(post){
   return (dispatch) => {
    dispatch(blogPostSlice.actions.getBlogPost(post))
   } 
}
