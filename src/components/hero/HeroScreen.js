import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

   const navigate = useNavigate();

   // Esto es nuevo 
   const params = useParams();
   // console.log(params.heroeId);
   const hero = getHeroById(params.heroeId);

   if (!hero) {
      return <Navigate to='/' />
   }

   const { id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters } = hero;

   const imagePath = `/assets/${id}.jpg`;

   const handleReturn = () => {
      navigate(-1);
   }

   return (
      <div className="row mt-5">
         <div className="col-4">
            <img
               src={imagePath}
               alt={superhero}
               className="img-thumbnail"
            />
         </div>
         <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group ">
               <li className="list-group-item"><b>Alter ego</b> {alter_ego}</li>
               <li className="list-group-item"><b>Publisher</b> {publisher}</li>
               <li className="list-group-item"><b>First Appereance</b> {first_appearance}</li>
            </ul>

            <h5>Characters</h5>
            <p>{characters}</p>

            <button
               className="btn btn-outline-primary"
               onClick={() => handleReturn()}
            >
               Regresar
            </button>

         </div>
      </div>
   )
}
