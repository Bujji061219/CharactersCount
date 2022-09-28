import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharactersCount extends Component {
  state = {searchInput: '', arra: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    this.setState(prevState => ({
      arra: [...prevState.arra, prevState.searchInput],
      searchInput: '',
    }))
  }

  renderimage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  rendercharacter = () => {
    const {arra} = this.state

    return arra.length === 0 ? (
      <this.renderimage />
    ) : (
      <ul className="list-items">
        {arra.map(each => (
          <li key={v4()}>
            {each}:{each.length}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="left-container">
          <h1>Count the Characters like a Boss.. </h1>
          <this.rendercharacter />
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onClickButton}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default CharactersCount
