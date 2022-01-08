// Ojo debe ser de react router dom , no de react router
import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { types } from '../../types/types';
import { authReducer } from '../../auth/authReducer';
import { AuthContext } from "../../auth/authContext";

export const LoginScreen = () => {


   const { dispatch} = useContext(AuthContext); //use context devuelve un dispatch 

   const navigate = useNavigate();

   const [value, handleInputChange] = useForm({
      email: '',
      password: ''
   });

   const { email, password } = value;

   const handleLogin = (e) => {
      e.preventDefault();
      const action = {
         type: types.login,
         payload: {
            name: email
         }
      }

      dispatch(action);
      navigate('/marvel', {
         replace: true
      });
   }

   return (
      <div className="container mt-5">

         <h1>Login Screen</h1>
         <hr />

         <div className="container">
            <form onSubmit={(e) => handleLogin(e)}>
               <div className="mb-3 col-4">
                  <label  className="form-label">Email address</label>
                  <input 
                     type="email" 
                     className="form-control" 
                     name="email"
                     value={email}
                     onChange={handleInputChange}
                     autoComplete="off"
                      />
               </div>
               <div className="mb-3 col-4">
                  <label  className="form-label">Password</label>
                  <input 
                     type="password" 
                     className="form-control" 
                     name="password"
                     value={password}
                     autoComplete="off"
                     onChange={handleInputChange}
                     />
               </div>
               <button 
                  type="submit" 
                  className="btn btn-primary">
                     Submit
               </button>
            </form>
         </div>
      </div>
   )
}
