import { useMemo, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

   // Demostrando que la funcion getHeroById se llama cuando se cambia un estado del componente  varias veces
   // Para esto necesitamos usar el useMemo para evitar estas llamadas si no hay valores nuevo,
   // Esto no es useEffect, 
   const [counter, setCounter] = useState(0);

   const navigate = useNavigate();

   // Esto es nuevo 
   // const params = useParams();
   const { heroeId } = useParams();
   // console.log(params.heroeId);
   // const hero = getHeroById(params.heroeId);
   // const hero = getHeroById(heroeId);
   // Entonces vamos a usar el useMemo para memorizar esta funcion, que si fuera un api hiciera llamadas sin control
   // Aqui coloco la dependencia , que es lo que cambnia , esto es como el useEffect pero para funciones. 
   const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

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
      // navigate(-1);
      setCounter(counter + 1);
   }

   return (
      <div className="row mt-5">
         <div className="col-4">
            <img
               src={imagePath}
               alt={superhero}
               className="img-thumbnail animate__animated animate__fadeInLeft"
            />
         </div>
         <div className="col-8 animate__animated animate__fadeIn">
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
               Regresar {counter}
            </button>

         </div>
      </div>
   )
}
