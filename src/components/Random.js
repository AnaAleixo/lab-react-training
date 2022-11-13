

function Random(props){
    const randomico = Math.floor(
        Math.random() * (props.max - props.min + 1) + props.min
      );

    return (
        <div className="Ramdom">
      <div>
        Value between {props.min} and {props.max} = <p>{randomico}</p>
      </div>
    </div>
    );

}

export default Random;