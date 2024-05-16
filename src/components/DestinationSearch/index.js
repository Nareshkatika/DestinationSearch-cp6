// Write your code here
import {useState} from 'react'
import Solution from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const [search, setSearch] = useState('')

  const onChangeSolution = event => {
    setSearch(event.target.value)
  }

  const Answer = destinationsList.filter(eachId =>
    eachId.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="colArrangeEl">
      <h1 className="headingEl">Destination Search</h1>
      <div className="rowArrangeEl">
        <input
          onChange={onChangeSolution}
          value={search}
          placeholder="Search"
          type="search"
        />
        <img
          className="logoEl2"
          alt="search icon"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        />
      </div>
      <ul className="rowArrangeEl45">
        {Answer.map(eachSol => (
          <Solution key={eachSol.id} items={eachSol} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
