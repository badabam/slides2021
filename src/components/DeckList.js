import React from 'react'
import { Link } from 'react-router-dom'

export const slides = process.env.REACT_APP_DECKS.split(',')

export default function DeckList() {
  return slides.map((name, index) => (
    <>
      <Link key={index} to={`/deck/${name}`}>
        {name}
      </Link>
      <br />
    </>
  ))
}
