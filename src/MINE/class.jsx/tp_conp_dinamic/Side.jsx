export default function Side({titre,list}){
    return (
        <div>
            <h3>Menu {titre}</h3>
            <ul>
                {list.map(e=><li>{e}</li>)}
            </ul>
        </div>
    )
}