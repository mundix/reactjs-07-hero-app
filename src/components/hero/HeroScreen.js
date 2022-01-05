import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

   // Esto es nuevo 
   const params = useParams();
   // console.log(params.heroeId);
   const hero = getHeroById(params.heroeId);

   if(!hero) {
      return <Navigate to='/'/>
   }

   return (
      <div>
         <h1>Hero Screen</h1>
         <p>{hero.superhero}</p>
      </div>
   )
}
