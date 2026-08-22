import React, { useEffect, useState } from "react" 
import { createContext } from "react"
import { getlocalstorage, setlocalstorage } from "../utils/localStorage"

export const Authprovider=createContext()

 const AuthContext =({children})=>{

    const [userData , setuserData]= useState(null)

    useEffect(()=>{
        setlocalstorage()
    const {employees,admin} = getlocalstorage()
     setuserData({employees,admin})
    },[])

     return ( <div> 
                <Authprovider.Provider value={userData}>
                    {children}
                </Authprovider.Provider>
     </div>
    )}
 
 export default AuthContext