import React, { createContext,useState } from "react";
export const UserAuth=createContext()
export const UserAuthProvider=({children})=>{
         const [token,setToken]=useState('')
         const login=(token)=>{
            setToken(token)
         }
         const logout=()=>{
            setToken()
         }
        return <UserAuth.Provider value={{token,setToken,login,logout}}>{children}</UserAuth.Provider>
}