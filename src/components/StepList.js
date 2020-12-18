import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Markdown } from 'spectacle'
import styled from 'styled-components/macro'

export default function StepList({ children }) {
  const bodyRef = useRef()
  bodyRef.current = useMemo(() => document.querySelector('body'), [])

  const [stepIndex, setStepIndex] = useState(0)
  const items = children
    .split('-')
    .map(x => x.trim())
    .slice(1)
  const onStepMemoized = useCallback(onStep, [stepIndex, items.length])

  useEffect(() => {
    bodyRef.current.addEventListener('keydown', onStepMemoized)
    return () => bodyRef.current.removeEventListener('keydown', onStepMemoized)
  }, [stepIndex, onStepMemoized])

  return (
    <section>
      {`${stepIndex}/${items.length}`}
      <List>
        {items.slice(0, stepIndex).map((item, index) => (
          <Item key={index}>
            <Markdown>{item}</Markdown>
          </Item>
        ))}
      </List>
    </section>
  )

  function onStep(event) {
    if (event.key === 'ArrowRight' && stepIndex < items.length) {
      event.stopImmediatePropagation()
      setStepIndex(oldIndex => oldIndex + 1)
      return
    }

    if (event.key === 'ArrowLeft' && stepIndex > 0) {
      event.stopImmediatePropagation()
      setStepIndex(oldIndex => oldIndex - 1)
      return
    }
  }
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  /* display: inline-flex; */
  /* place-content: center; */
  margin: 10px;
  padding: 20px;
  border: 2px solid;
  border-radius: 8px;
  div {
    display: inline;
  }
`
