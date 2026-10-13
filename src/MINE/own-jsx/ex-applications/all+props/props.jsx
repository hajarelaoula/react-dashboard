// ex1:props => str
export default function App(){
    return (
        <div>
        <String  name="Hajar" city="Meknes"/>
        <Spp/>
        <Number name="Laptop" price={92} quantity={100}/>
        <Spp/>
        <Boolean name="Ali" isPresent={true}/>
        <Spp/>
        <Array skills={["HTML", "CSS", "JavaScript"]} />
        <Spp/>
        <Object user={{name: "Hajar", age: 20, job: "Developer"}}/>
        <Spp/>
        <Destructuring user={{name: "Hajar", age: 20, job: "Developer"}}/>
        <Afficher />
        <Spp/>
        </div>
    )
}
export  function String({name,city}){
    return (
        <div>
        <h1>Name: {name}</h1>
        <h2>City: {city}</h2>
        </div>
    )
}
// sperator
export  function Spp(){
    return(
        <div>
            <hr />
            <hr />
        </div>

    )}
// ex2 :props=>numbers
export  function Number({name,price,quantity}){
    return (
        <div>
        <h1>Name: {name}</h1>
        <h2>Price: {price}</h2>
        <h2>Quantity: {quantity}</h2>
        </div>
    )
}
// ex3 :props=>boolean
export  function Boolean({name,isPresent}){
    return (
        <div>
        <h1>Name: {name}</h1>
        <h2>IsPresent: {(isPresent)?"present":"absent"}</h2>
        </div>
    )
}
// ex4 :props=>array
export  function Array({skills}){
    return (
        <div>
        <h1>My Skills: {skills.join(" - ")}</h1>
        
        </div>
    )
}
// ex5 :props=>object
export  function Object({user}){
    return (
        <div>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <h2>Job: {user.job}</h2>
        
        </div>
    )
}
// ex6 :props=>Destructuring Props
export  function Destructuring({user}){
     const {name,age,job}=user
    return (
        <div>
       
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{job}</h2>
        
        </div>
    )
}
// ex7 :props=>challenge global
export function Afficher(){
    
    return(
        <div>
           <Header/>
           <StudentList/>
           
           
        </div>
    )
}
// functions for Afficher
function Header(){
    return(
         <h1>Student infromations :</h1>
    )
}
function StudentCard({user}){
    const {name,age,email,city,isStudent,skills}=user
    return(
         <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Email:{email}</p>
            <p>City:{city}</p>
            <p>IsStudent : {(isStudent)?"is Student":"Is not a student"}</p>
            <p>Skills:{skills.join(" - ")}</p>
        </div>
    )
}

function StudentList(){
        const student=[
        {
        name: "Hajar",
        age: 20,
        email: "hajar@gmail.com",
        city: "Meknes",
        isStudent: true,
        skills: ["HTML", "CSS", "JavaScript"]

             },
        {
       name: "Sara",
        age: 22,
        email: "sara@gmail.com",
        city: "Fes",
        isStudent: true,
        skills: ["JavaScript", "React"]
      },
      {
         name: "hiba",
        age: 22,
        email: "hiba@gmail.com",
        city: "meknes",
        isStudent: false,
        skills: ["JavaScript", "React"]
      },
      
    ]
    ;
      const st=student.map(user=>
      <StudentCard 
      user={user}
      />)
      return(
        <div>
            {st}
        </div>
      )
}