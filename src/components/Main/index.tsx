import * as S from './styles'

function Main({
  title = 'Boilerplate Next13',
  description = 'Bem vindo ao meu boilerplate.'
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/developerhome.svg"
        alt="Um desenvolvedor sentado com notebook nas pernas e imagens de programação de fundo."
      />
    </S.Wrapper>
  )
}

export default Main
