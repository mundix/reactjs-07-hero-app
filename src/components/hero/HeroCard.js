
export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters
}) => {

   const imagePath  = `/assets/${id}.jpg`;

   return (

      <div className="col">
         <div className="card">
            
            <div className="row no-gutters">
               <div className="col-md-04">
                  <img src={imagePath} className="card-img-top" alt=""/>
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}
