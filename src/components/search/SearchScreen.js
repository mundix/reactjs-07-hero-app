import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from "react";

export const SearchScreen = () => {

   const navigate = useNavigate();
   const location = useLocation();

   console.log(location.search);
   // const query = queryString.parse(location.search);
   //Estoy buscando 'q' de query 
   const { q = '' } = queryString.parse(location.search);

   const [formValues, handleInputChange] = useForm({
      // searchText: ''
      searchText: q
   });

   const { searchText } = formValues;
   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

   const handleSearch = (e) => {
      e.preventDefault();
      // console.log(searchText);
      navigate(`?q=${searchText}`);
   }

   return (
      <>
         <h1>Búsquedas</h1>
         <hr />
         <div className="row">
            <div className="col-5">
               <h4>Buscar</h4>
               <hr />
               <form onSubmit={handleSearch}>
                  <input
                     type="text"
                     placeholder="Buscar ujn héroe"
                     className="form-control"
                     name="searchText"
                     value={searchText}
                     autoComplete="off"
                     onChange={handleInputChange}
                  />
                  <button
                     type="submit"
                     className="btn btn-outline-primary mt-1 "

                  >
                     Buscar
                  </button>

               </form>
            </div>
            <div className="col-7">
               {
                  (q === '') ? <div className="alert alert-info">Buscar un héroe</div> :
                     (heroesFiltered.length === 0) && <div className="alert alert-danger">No hay resoltados con: {q}</div>
               }
               {
                  heroesFiltered.map(hero => (
                     <HeroCard
                        key={hero.id}
                        {...hero}
                     />
                  ))
               }
            </div>
         </div>
      </>
   )
}
