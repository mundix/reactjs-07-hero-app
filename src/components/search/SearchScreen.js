import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

   const [{searchText}, handleInputChange, reset] = useForm({
      searchText: ''
   });

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
         </div>
      </>
   )
}
