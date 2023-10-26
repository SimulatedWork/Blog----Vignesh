import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import blogPostSlice from './BlogPostSlice'

const rootReducer = combineReducers({
    user: userSlice, 
    blogs: blogPostSlice 
})

export {rootReducer}