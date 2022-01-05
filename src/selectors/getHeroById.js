import { heroes } from '../data/heroes';

export const getHeroById = (id = '') => {
   console.log('get hero by id called');
   return heroes.find(hero => hero.id === id);
}
