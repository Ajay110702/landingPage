import {createContext,useContext,useEffect,useState} from 'react';

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    useEffect(()=>{
   const savedUser=localStorage.getItem("user");
   if(savedUser) setUser(JSON.parse(savedUser));
    },[]);

    const login=(data,remember)=>{
        setUser(data.user);
        if(remember){
            localStorage.setItem("user",JSON.stringify(data.user));
            localStorage.setItem("token",data.token);
        }
    };

    const logout=()=>{
        setUser(null);
        localStorage.clear();
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );


};

export const useAuth=()=>useContext(AuthContext);
