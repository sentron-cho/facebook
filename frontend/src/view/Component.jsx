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
  return <a className="my-textlink" href={props.url} onClick={props.onClick}>{props.text}</a>
}


// 2차 컴포넌트
export const Subtitle = (props) => {
  return <div className="my-subtitle">{props.text}</div>
}

export const Select = (props) => {
  const list = [
    { value: "2021", text: "2021"},
    { value: "2020", text: "2020"},
    { value: "2019", text: "2019"}
  ]

  return  <select className="my-select" name={props.name} title={props.title}>
    {/* <option value="2021">2021</option> */}
    { list.map(item => <option value={item.value}>{item.text}</option>) }
  </select>
}

export const Radio = (props) => {
  return <span className="my-radio">
    <label for={props.id}>{props.text}</label>
    <input id={props.id} type="radio" name={props.name} value={props.value} />
</span>
}
