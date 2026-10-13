const botton=
[{
    image:"/project_dashboard/man-one.webp",
    title:'the first man'
    
},
{
    image:"/project_dashboard/man-two.webp",
    title:'the second man'
},
{
    image:'/project_dashboard/one.webp',
    title:'the first women'
},
{
    image:"/project_dashboard/two.webp",
    title:'the first women'
}
]
import './app.css'
export default function Component(){
    return(
        <div>
       <Header />
       <Sections name="hajar" email="hajar@gmail.com"/>
       <Sections name="sarah" email="sarah@gmail.com"/>
       <Sections name="hiba" email="hiba@gmail.com"/>
       <Sections name="bilal" email="bilal@gmail.com"/>
       <Sections name="arwa" email="arwa@gmail.com"/>
       <Sections name="outhmane" email="outhmane@gmail.com"/>
        <div className='bbnt'>
       {
        botton.map(e=><Buttons >
            <div className='btns'>
                <img src={e.image} ></img>
                <span>{e.title}</span>
            </div>
        </Buttons> )
       }             
       
       </div>
       </div> 
    )
}
function Header(){
    return (
        <h1 className='head'>Tarmeez Academy</h1>
    )
}
function Sections(props){
    return (
        <div className='sec'>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}
function Buttons(prop){
    return (
       
        <button className='btn'>
            {prop.children}
        </button>
        
    )
}