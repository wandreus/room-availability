import * as S from './styles'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { RegexDate } from 'utils'
import Event from 'components/Event'

function Home({ format }) {
  const [value, onChange] = useState(new Date())
  const [showEvent, setShowEvent] = useState(false)
  const [useEvent, setEvent] = useState([])

  const openEvent = (value) => {
    setShowEvent(true)
    setEvent(findDate(value))
  }

  const findDate = (date) => {
    return format?.filter((item) => item?.format == RegexDate(date))
  }

  return (
    <S.Wrapper>
      <Calendar
        tileContent={({ date, view }) => {
          if (view !== 'month') return null

          return (
            findDate(date)?.length > 0 && (
              <S.Disclamer>
                {findDate(date)?.map(({ title }, i) => (
                  <span key={i}>{title}</span>
                ))}
              </S.Disclamer>
            )
          )
        }}
        onClickDay={(value) => openEvent(value)}
        onChange={onChange}
        value={value}
      />
      <Event value={{ useEvent, showEvent, setShowEvent }} />
    </S.Wrapper>
  )
}

export default Home
