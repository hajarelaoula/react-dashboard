export default function Dash({props}){
    return(
        <div className="dash">
        <h1>Dashboard</h1>
        <button>
            <span>Star this project on github </span>
            <span>   view more</span>
        </button>
        <div>
            {props}
        </div>
        
        </div>
    )
}