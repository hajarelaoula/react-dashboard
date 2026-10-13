
import Service from './Service.jsx'
import InformationService from './Information.jsx'
import ListePersonnel from './ListPersonnels.jsx'
import AutreService from './ListAutreService.jsx'
import './style.css'
export default function Appp(){
return (
    <div className='parent'>
        <div className='card1'> <Service/></div>
        <div className='card2'> <InformationService/></div>
        <div className='card3'> <ListePersonnel/></div>
       <div className='card4'>  <AutreService/></div>
      
    </div>
)
}