


function InputField (props){

    return(

        <div className="form-group">
          <label>{props.label}</label>
          <input 
          type={props.type} 
          placeholder={props.placeholder} 
          name={props.name}
          onChange={props.onchange}
          className="form-control"/>
        </div>
    )
}

export default InputField;