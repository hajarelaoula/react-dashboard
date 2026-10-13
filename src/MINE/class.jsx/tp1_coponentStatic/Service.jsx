import {Services}from './data'
export default function Service(){
    return(
        <div>
            <h1>Services :</h1>
        <select>
       { Services.map(e=><option>{e.titre}</option>)}
        </select>
        </div>
    )
}