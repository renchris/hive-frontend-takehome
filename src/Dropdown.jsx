/* eslint-disable react/jsx-no-bind */
import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import DropdownItem from './DropdownItem'

const Dropdown = ({ placeholderText, optionTitleList, variant }) => {
  const [optionObjectList, setOptionObjectList] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const dropdownSelect = useRef(null)
  const dropdownList = useRef(null)
  const closeOrOpenMenu = (e) => {
    if (isOpen) {
      if (
        (dropdownList.current
          && !dropdownList.current.contains(e.target)
        )
          && (dropdownSelect.current
           && !dropdownSelect.current.contains(e.target))
      ) {
        setIsOpen(false)
      }
    }
  }

  document.addEventListener('mousedown', closeOrOpenMenu)

  useEffect(() => {
    for (let index = 0; index < optionTitleList.length; index += 1) {
      const newEntry = {
        id: index,
        title: optionTitleList[index],
        selected: false,
      }
      setOptionObjectList((listBeforeEntry) => [...listBeforeEntry, newEntry])
    }
  }, [])

  /**
  Utilizing an extra useState to re-render as
  I could not get it to re-render the component with useEffect(() => {...}, [optionObjectList])
  as I could not get setOptionObjectList in the child component
  to reflect changes to optionObjectList
  */
  const [rerender, setRerender] = useState(0)

  function refresh() {
    setRerender((rerender + 1) % 2)
  }

  function closeDropdown() {
    setIsOpen(false)
  }

  const selectedTitles = optionObjectList.filter(
    (object) => object.selected,
  ).map((selectedObjects) => selectedObjects.title)
  const selectedTitlesToString = selectedTitles.join(', ')

  return (
    <div className="Dropdown">
      <div
        className="dropdown-wrapper"
        style={{
          marginTop: '12px',
          height: 'fit-content',
          position: 'relative',
          minWidth: '140px',
          maxWidth: '350px',
        }}
      >
        <button
          className="dropdown-select"
          type="button"
          ref={dropdownSelect}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: 'black',
            width: '100%',
            backgroundColor: 'white',
            border: '4px solid #3182ce',
            borderRadius: '6px',
            padding: '0px 16px 1px 16px',
            lineHeight: 'normal',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {selectedTitlesToString.length > 0
              ? selectedTitlesToString : placeholderText}
          </p>
          {isOpen
            ? <MdArrowDropUp />
            : <MdArrowDropDown />}
        </button>
        {isOpen
        && (
        <div
          className="dropdown-list"
          id={`dropdown-list-${variant}`}
          ref={dropdownList}
          style={{
            padding: '8px 0px',
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1)',
            color: 'black',
            position: 'absolute',
            width: '100%',
            maxHeight: '200px',
            overflowY: 'scroll',
          }}
        >
          {
            optionObjectList.length === optionTitleList.length
            && variant === 'multi' && (
              <DropdownItem
                key="select-all-item"
                text="select all"
                optionObjectList={optionObjectList}
                setOptionObjectList={() => setOptionObjectList}
                setRerender={refresh}
                variant={variant}
                setIsOpen={closeDropdown}
              />
            )
          }
          {
            optionObjectList.length === optionTitleList.length
            && variant === 'multi' && (
              <DropdownItem
                key="deselect-all-item"
                text="deselect all"
                optionObjectList={optionObjectList}
                setOptionObjectList={() => setOptionObjectList}
                setRerender={refresh}
                variant={variant}
                setIsOpen={closeDropdown}
              />
            )
          }
          {
             optionObjectList.map((optionsItem) => (
               <DropdownItem
                 key={optionsItem.id}
                 text={optionsItem.title}
                 optionObjectList={optionObjectList}
                 setOptionObjectList={() => setOptionObjectList}
                 setRerender={refresh}
                 variant={variant}
                 setIsOpen={closeDropdown}
               />
             ))
            }
        </div>
        )}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  optionTitleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.string.isRequired,
}

export default Dropdown
