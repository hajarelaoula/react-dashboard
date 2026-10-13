export default function Client({cl}){
    return (
        <div>
            <table>
                <tr>
                    <th>CLIENT</th>
                    <th>aMOUNT</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                </tr>
                {cl.map(e=>(<tr>
                <td><img src={e.image} width={50} height={50}></img>{e.nom}{e.role}</td>
                <td>{e.amount}</td>
                <td>{e.status}</td>
                <td>{e.date}</td>
                </tr>)
                )}

            </table>
        </div>
    )
}