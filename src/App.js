import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Deck from './components/Deck'
import DeckList from './components/DeckList'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={DeckList} />
      <Route path="/deck/:name" component={Deck} />
    </Switch>
  )
}
