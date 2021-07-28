import * as S from './styles'

const Event = ({ value: { useEvent, showEvent, setShowEvent } }) => {
  return (
    <S.Wrapper className={showEvent && useEvent.length ? 'active' : ''}>
      <S.Close onClick={() => setShowEvent((use) => !use)}>X</S.Close>
      {useEvent.map(({ title, format, influencer, studio, time }, i) => {
        return (
          <S.Card key={i}>
            <S.Header>{title}</S.Header>
            <S.DateAndTime>
              <li>
                <label>Data:</label>
                <span>{format}</span>
              </li>
              <li>
                <label>Hora:</label>
                <span>{time}</span>
              </li>
            </S.DateAndTime>
            <S.DateAndTime>
              <li>
                <label>influencer:</label>
                {influencer.map(({ nome }, i) => (
                  <span key={i}>{nome}</span>
                ))}
              </li>
              <li>
                <label>Studio:</label>
                {studio.map(({ name }, i) => (
                  <span key={i}>{name}</span>
                ))}
              </li>
            </S.DateAndTime>
          </S.Card>
        )
      })}
    </S.Wrapper>
  )
}

export default Event
