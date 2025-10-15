import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
   
    name:"myWishlist",
    initialState:[],
    reducers:{

        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        removewishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addtowishlist,removewishlist}=wishlistSlice.actions
export default wishlistSlice.reducer 

