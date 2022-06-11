import "./Response.css";

function Response(props) {
  return (
    <div className={`response ${props.statusClass}`}>
      <h3 className="respone_messg">{props.messg}</h3>
      {props.subMessg ? <p>Token :{props.subMessg}</p>:null}
    </div>
  );
}

export default Response;
