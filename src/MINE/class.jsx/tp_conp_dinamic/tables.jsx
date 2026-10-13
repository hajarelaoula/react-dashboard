export default function Table({titre,infos}){
    return (
        <div>
            <h1>{titre}</h1>
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prix</th>
                </tr>
                {infos.map(e=>(<tr>
                    <td>{e.id}</td>
                    <td>{e.nom}</td>
                    <td>{e.prix}</td>
                </tr>))}
            </table>
        <span>Totale: {infos.reduce(function(e,c){return e+c.prix},0)}</span>
        </div>
    )
}