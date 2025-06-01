import { createReducer } from '@reduxjs/toolkit'

const defaultContacts = []
const defaultFilter = ""

export const contactsReducer = createReducer(defaultContacts, (builder) => {
  builder
    .addCase("add", (state, action) => {
      state.push(action.payload) 
    })
    .addCase("delete", (state, action) => {
      return state.filter(contact => contact.name !== action.payload)
    })
})


export const filterReducer = createReducer(defaultFilter, (builder) => {
  builder.addCase("FILTER", (state, action) => action.payload)
})
