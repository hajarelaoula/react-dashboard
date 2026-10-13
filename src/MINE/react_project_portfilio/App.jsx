import {liste,dashb,clients} from './data'
import SideBare from './side'
import Header from './header'
import Dash from './dashboard'
import Client from './client'
import './style.css'



export default function Ap(){
   
return(
    <div className='parent'>
        
    <Header/>
   

    <div className='side'>
    <SideBare list={liste}/>
    </div>

    <div className='dash'>
    <Dash props={dashb.map(e=>{
         const Acon=e.acon;
         return(
        <div key={e.title}>
        <Acon/>
        <p>{e.title}</p>
        <p>{ e.value}</p>
        </div>)
    })
    }/>
        </div>

        <div className='client'>
    <Client cl={clients}/>
    </div>

    </div>
)
}