import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Deck, mdxComponentMap, Notes, Slide } from 'spectacle'
import Template from './Template'

const theme = {
  Heading: {
    textAlign: 'left',
  },
  colors: {
    secondary: '#193251',
    nforange: '#FF5A36',
    primary: '#516278',
  },
  fontSizes: {
    h1: '64px',
    paragraph: '28px',
  },
  textAlign: {
    h1: 'left',
  },
}

export default function Presentation({ slides = [], notes }) {
  return (
    <MDXProvider components={mdxComponentMap}>
      <Deck backgroundColor="#fff" theme={theme} template={Template}>
        {slides
          .map((MDXSlide, i) => [MDXSlide, notes[i]])
          .map(([MDXSlide, MDXNote], i) => (
            <Slide backgroundColor="#fff" key={`slide-${i}`} slideNum={i}>
              <MDXSlide />
              <Notes>
                <MDXNote />
              </Notes>
            </Slide>
          ))}
      </Deck>
    </MDXProvider>
  )
}
