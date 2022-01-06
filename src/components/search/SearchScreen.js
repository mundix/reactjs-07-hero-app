import { useForm } from "../../hooks/useForm";
import { gtHeroesByName } from '../../selectors/gtHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

   const [formValues, handleInputChange] = useForm({
      searchText: ''
   });

   const { searchText } = formValues;
   const heroesFiltered = gtHeroesByName('Algo por Aqui');


   const handleSearch = (e) => {
      e.preventDefault();
      console.log(searchText);
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
