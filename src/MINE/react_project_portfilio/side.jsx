export default function SideBare({list}){
   
    return(
        <div className="side">
           
            <ul>
{list.map(e => {
const Acon = e.acon;

                return (
                    <li key={e.name}>
                        <Acon size={20} />
                        <a href="#">{e.name}</a>
                    </li>
                );
            })}
        </ul>
            <button>Create account +</button>
        </div>
    )
}