import { Text } from '../Text'
import { Container } from './style'

export function Header() {
  return (
    <Container>
      <Text size={14} opacity={0.9}>
        Bem vindo (a) ao
      </Text>
      <Text size={24} weight='600'>
        GAR.COM
        <Text size={24} weight='400'>
          APP
        </Text>
      </Text>
    </Container>
  )
}
