import React from 'react'
import Main from 'components/Main'
import Template from 'templates/Home'
import { RegexDate } from 'utils'

export async function getStaticProps() {
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

    const formatDate = data?.allEventos.map((item) => {
      const format = RegexDate(new Date(item?.date))
      const time = item?.date.split('T')?.[1]
      return { ...item, format, time }
    })

    return {
      props: { formatDate }
    }
  } catch (error) {
    return { props: { error } }
  }
}

export default function Home(props) {
  return (
    <Main {...props}>
      <Template {...props} />
    </Main>
  )
}
