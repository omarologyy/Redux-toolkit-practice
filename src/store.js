import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/cart/modal/modalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
