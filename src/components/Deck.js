import React, { useEffect, useState } from 'react'
import Presentation from './Presentation'

export default function Deck({ match }) {
  const [deck, setDeck] = useState()
  const { name } = match.params

  useEffect(() => {
    import(`../decks/${name}.mdx`)
      .then(result => setDeck({ slides: result.default, notes: result.notes }))
      .catch(error => console.error(error))
  }, [])

  return deck ? (
    <Presentation slides={deck.slides} notes={deck.notes} />
  ) : (
    'Loading ...'
  )
}
