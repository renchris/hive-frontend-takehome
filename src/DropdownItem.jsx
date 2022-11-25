import PropTypes from 'prop-types'
import { BiCheckbox, BiCheckSquare } from 'react-icons/bi'
import './DropdownItem.css'

const DropdownItem = ({
  text, optionObjectList, setRerender, setIsOpen, variant,
}) => (
  <button
    className="dropdown-item"
    id={`dropdown-item-${text}`}
    type="button"
    onClick={() => {
      if (variant === 'single') {
        for (let index = 0; index < optionObjectList.length; index += 1) {
          const selectObject = optionObjectList[index]
          selectObject.selected = false
        }
        const clickedItemText = document.getElementById(`dropdown-item-${text}`).textContent
        const clickedItemObject = optionObjectList.find(
          (item) => item.title === clickedItemText,
        )
        clickedItemObject.selected = true
      } else {
        const clickedItemText = document.getElementById(`dropdown-item-${text}`).textContent
        if (clickedItemText === 'select all' || clickedItemText === 'deselect all') {
          for (let index = 0; index < optionObjectList.length; index += 1) {
            const selectObject = optionObjectList[index]
            selectObject.selected = clickedItemText === 'select all'
          }
        } else {
          const clickedItemObject = optionObjectList.find(
            (item) => item.title === clickedItemText,
          )
          clickedItemObject.selected = !clickedItemObject.selected
        }
      }
      if (variant === 'single') {
        setIsOpen()
      }
      setRerender()
    }}
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      border: 'none',
    }}
  >
    {
      // eslint-disable-next-line no-nested-ternary
      text === 'select all' || text === 'deselect all' || variant === 'single'
        ? null
        : optionObjectList.find(
          (item) => item.title === text,
        ).selected
          ? <BiCheckSquare />
          : <BiCheckbox />

        }
    <p style={{ marginLeft: '12px' }}>
      {text}
    </p>
  </button>

)

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  optionObjectList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  })).isRequired,
  setRerender: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
}

export default DropdownItem
