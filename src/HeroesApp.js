import { useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { AppRouter } from "./routers/AppRouter"

export const HeroesApp = () => {

   const user = {
      name: 'Edmundo',
      logged: true
   }
   const {state, dispatch} = useReducer();
   return (
      <AuthContext.Provider value={user}>
         <AppRouter />
      </AuthContext.Provider>
   )
}
