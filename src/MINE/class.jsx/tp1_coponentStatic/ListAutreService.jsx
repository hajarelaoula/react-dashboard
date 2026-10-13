import {Personnels,numService} from './data'
export default function AutreService(){
    const perAutre=Personnels.filter(e=>e.serviceId!==numService);
    return(
        <div>
            <h1>List des personnel d'autre service</h1>
            {
                perAutre.map(e=>
                    <div>
                     <input type='checkbox' checked={e.actif}  style={{display:'inline'}}/>
                     <p style={{display:'inline'}}>{e.nom} {e.prenom} : service{e.serviceId}</p>
                     </div>

                )
            }
           
        </div>


    )
}