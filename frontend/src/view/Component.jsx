export const InputBox = (props) => {
  const { type, name, placeholder, onChange = null } = props
  return (
    <div className={'w-full'}>
      <input
        className={'w-full'}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export const ImageBox = (props) => {
  if (props.type === 'large') {
    return <img src={props.src} alt="이미지" />
  } else {
    return (
      <li className="c-li">
        <img src={props.src} alt="이미지" />
      </li>
    )
  }
}
