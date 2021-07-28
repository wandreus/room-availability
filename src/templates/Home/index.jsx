import * as S from './styles'
import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { RegexDate } from 'utils'
import Event from 'components/Event'

function Home({ formatDate }) {
  const [value, onChange] = useState(new Date())
  const [showEvent, setShowEvent] = useState(false)
  const [useEvent, setEvent] = useState([])
  const [useformatDate, setformatDate] = useState(formatDate)

  const openEvent = (value) => {
    setShowEvent(true)
    setEvent(findDate(value))
  }

  const findDate = (date) => {
    return useformatDate?.filter((item) => item?.format == RegexDate(date))
  }

  useEffect(() => {
    const get = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_KEY
        const query =
          '{ allEventos { title studio { name } date influencer { nome } } }'

        const get = await fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ query })
        })

        const { data } = await get.json()

        const format = data?.allEventos.map((item) => {
          const format = RegexDate(new Date(item?.date))
          const time = item?.date.split('T')?.[1]
          return { ...item, format, time }
        })

        setformatDate(format)
      } catch (error) {
        console.log({ error })
      }
    }

    get()
  }, [formatDate])

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
