 export function AlertBox({children}) {
  return (
    <div className="alert">
      {children}
    </div>
  );
}
export default function UserCard(props) {
  return (
    <div className="card">
      {props.content}
    </div>
  );
}