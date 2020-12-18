import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Deck, mdxComponentMap, Notes, Slide, Markdown } from 'spectacle'
import Template from './Template'

const theme = {}

export default function Presentation({ slides = [], notes }) {
  return (
    <MDXProvider components={mdxComponentMap}>
      <Deck loop theme={theme} template={Template}>
        {slides
          .map((MDXSlide, i) => [MDXSlide, notes[i]])
          .map(([MDXSlide, MDXNote], i) => (
            <Slide key={`slide-${i}`} slideNum={i}>
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
