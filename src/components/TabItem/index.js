// Write your code here

import './index.css'

const TabItem = props => {
  const {allTabsList, updateTabId, isActive} = props
  const {tabId, displayText} = allTabsList

  const changeColor = isActive ? 'color-tab' : ''

  const updateBtn = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-list">
      <button
        type="button"
        className={`each-tab-btn ${changeColor}`}
        onClick={updateBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
