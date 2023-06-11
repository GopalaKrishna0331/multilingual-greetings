import './index.css'

const ButtonElement = props => {
  const {each, selectButtonElement, selectedId} = props
  const {id, buttonText} = each
  const onClickButton = () => {
    selectButtonElement(id)
  }
  const matchButton = selectedId === id ? 'selected-button' : 'button'

  return (
    <li className="list">
      <button className={matchButton} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonElement
