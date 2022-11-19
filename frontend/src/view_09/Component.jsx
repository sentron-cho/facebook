export const Image = (props) => {
  return <div className={'my-image'}>
    <img src={props.src} alt={props.alt} />
  </div>
}

export const Title = (props) => {
  return <h1 className="my-title">{props.text}</h1>
}

export const Input = (props) => {
  const { type, name, placeholder, onChange = null } = props
  return (
    <input
      className="my-input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export const Linebar = (props) =>{
  return <div className="my-line" />
}

export const Button = (props) => {
  return <button className={"my-button " + props.type} onClick={props.onClick} >{props.text}</button>
}

export const TextLink = (props) => {
  return <a className="my-textlink" href={props.url}>{props.text}</a>
}