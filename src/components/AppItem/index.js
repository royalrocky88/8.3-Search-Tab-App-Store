// Write your code here

import './index.css'

const AppItem = props => {
  const {allAppsList} = props
  const {appName, imageUrl} = allAppsList

  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} className="logo-card" />
      <p className="name-card">{appName}</p>
    </li>
  )
}

export default AppItem
