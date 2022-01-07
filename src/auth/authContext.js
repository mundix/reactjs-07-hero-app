//Aqui se declara diferente  se pone en Mayuscula la primer letra del nombre del Context AuthContext 

import { createContext } from "react";

// Ahora debe ir al punto mas alto de la App, podria ser el index.js, pero lo vamos hacer dentro de HeroesApp
export const AuthContext = createContext();