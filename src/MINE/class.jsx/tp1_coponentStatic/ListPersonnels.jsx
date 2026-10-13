import {Personnels,numService} from './data'
export default function ListePersonnel(){
    const per=Personnels.filter(e=>e.serviceId==numService)
    return(
        <div>
            <h1>List des personnel de services :{numService}</h1>
            <div>
                {
                    per.map(function(e){
                        return (
                            <div>
                            <input type="checkbox" checked={e.actif} style={{display:'inline'}}/>
                            <p style={{display:'inline'}}>{e.nom} {e.prenom}</p>
</div>
                            
                        )
                    }
                )
                }
                {/* {per.map(e=>(<input type='checkbox' checked={e.actif}/>,e.nom )
                    )} */}
            </div>
        </div>
    )
}