export function App(){
    return <div>
        <Header/>
        <div style={{display:"flex",
            
        }}>
        <SelectF/>
        <SelectG/>
        </div>
      
        <Table/>
         <Moyenne/>
    </div>
}



 function Header(){
   return  <h1 style={{textAlign:"center"}}>Fiche d'inscreption</h1>
}
function SelectF(){
    var filier=["DEV","ID","gestion"];
    
    return <div style={{marginLeft:"30px"}}>
        <h3>Filiere:</h3>
        <select>
            {filier.map(e=><option>{e}</option>)}
        </select>

    </div>
}
function SelectG(){
    var groupe=["201","202","203"];
    
    return <div style={{marginLeft:"400px"}}>
        <h3>Groupe:</h3>
        <select>
            {groupe.map(e=><option>{e}</option>)}
        </select>

    </div>
}
function Table(){
    var infos=[{nom:"hajar",prenom:"elaoula",note:20},
        {nom:"sara",prenom:"elaoui",note:20},
        {nom:"hiba",prenom:"elamrany",note:20},

    ]
    return <div>
        <table border="1" style={{marginTop:"40px",marginLeft:"90px"}
    }>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Note</th>
            </tr>
                {infos.map(e=><tr><td>{e.nom}</td>
                <td>{e.prenom}</td>
                <td>{e.note}</td>
                </tr>)}
                
            
        </table>
    </div>
}
function Moyenne(){
      var infos=[{nom:"hajar",prenom:"elaoula",note:20},
        {nom:"sara",prenom:"elaoui",note:20},
        {nom:"hiba",prenom:"elamrany",note:20},

    ]
    return <div>
        <p>la moyenne:</p>
        <p>{infos.reduce(function(s,n){return s+n.note},0)}</p>
    </div>
}