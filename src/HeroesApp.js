import { AuthContext } from "./auth/authContext"
import { AppRouter } from "./routers/AppRouter"

export const HeroesApp = () => {
   return (
      <AuthContext.Provider>
         <AppRouter />
      </AuthContext.Provider>
   )
}
