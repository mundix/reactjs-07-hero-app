import { useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { AppRouter } from "./routers/AppRouter"
import { authReducer } from './auth/authReducer';

const init = () => {
   return {
      logged: true,
      name: 'Edmundo Temporal'
   }   
}



export const HeroesApp = () => {

   
   const [user, dispatch] = useReducer(authReducer, {}, init);

   return (
      <AuthContext.Provider value={{
         user,
         dispatch
      }}>
         <AppRouter />
      </AuthContext.Provider>
   )
}
