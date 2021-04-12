
function Button({text, classname, onclick}) {
  return (
        <button className={classname} onClick={onclick}>{text}</button>
  );
}

export default Button;
