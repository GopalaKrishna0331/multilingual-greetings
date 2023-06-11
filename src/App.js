import {Component} from 'react'

import ButtonElement from './components/ButtonElement'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {selectedId: languageGreetingsList[0].id}

  selectButtonElement = id => {
    this.setState({selectedId: id})
  }

  render() {
    const {selectedId} = this.state
    const listItemElement = languageGreetingsList.filter(
      each => each.id === selectedId,
    )
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unordered-list">
          {languageGreetingsList.map(each => (
            <ButtonElement
              key={each.id}
              each={each}
              selectButtonElement={this.selectButtonElement}
              selectedId={selectedId}
            />
          ))}
        </ul>
        <img
          src={listItemElement[0].imageUrl}
          alt={listItemElement[0].imageAltText}
          className="img"
        />
      </div>
    )
  }
}

export default App
