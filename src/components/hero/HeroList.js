import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ( { publisher } ) => {

   const heroes = getHeroesByPublisher(publisher);


   return (
      <>
         <h1>Hero List - {publisher}</h1>

         <ul>
            {
               heroes.map( (hero, index) => (
                  <li key={index}>
                     {hero.superhero}
                  </li>
               ))
            }
         </ul>
      </>
   )
}
