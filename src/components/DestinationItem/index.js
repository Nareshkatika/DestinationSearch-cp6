// Write your code here
import './index.css'

const Solution = props => {
  const {items} = props
  const {name, imgUrl} = items

  return (
    <li className="listEl">
      <img className="logoEl" alt={name} src={imgUrl} />
      <p className="paragraphEl1">{name}</p>
    </li>
  )
}

export default Solution
