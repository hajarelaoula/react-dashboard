
// 1. Importer StrictMode pour aider à détecter certains problèmes
//    pendant le développement.
import { StrictMode } from 'react';

// 2. Importer createRoot pour connecter React à la page HTML.
import { createRoot } from 'react-dom/client';

// 3. Importer le composant que je veux afficher.
//    Ex pour metriser les composant dynamiques .
import App from './MINE/own-jsx/ex-applications/all+props/props.jsx';
//    Ex pour metriser les props as jsx.
import AlertBox from './MINE/own-jsx/ex-applications/all+props/propsAsJsx.jsx';
import  UserCard from './MINE/own-jsx/ex-applications/all+props/propsAsJsx.jsx';
import Appp from './MINE/class.jsx/tp1_coponentStatic/afficher.jsx'
import  Aficher from './MINE/class.jsx/tp_conp_dinamic/Affichage.jsx'
import Component from './MINE/own-jsx/challenges/frist-v11-props/app.jsx'
// minde: variable pour stocke  mes ex d'application et mes challenges
import Ap from './MINE/react_project_portfilio/App.jsx'
const minde=(
  <div>
       <App />
   <AlertBox>
      <h2>Welcom Hajar</h2>
      <p>You are learning React</p>
      </AlertBox> 
      < UserCard  content={<div>
        <h2>hajar elaoula</h2>
        <p>junior web developer</p>
        <button>Contact me</button>
      </div>}/>
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Component/>
  </StrictMode>
);