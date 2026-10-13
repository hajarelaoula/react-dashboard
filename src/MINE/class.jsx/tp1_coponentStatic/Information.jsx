import {Services,Personnels,numService} from './data'
export default function InformationService(){
    const Ser=Services.find(e=>e.numero==numService)
    return(
        <div>
            <h1>Numero:{Ser.numero}</h1>
            <h1>Titre:{Ser.titre}</h1>
            <h1>Descreption: {Ser.descreption}</h1>
            <p>Nombre des personnels: {(Personnels.filter(e=>e.serviceId==numService).length)} </p>
        </div>
    )
}