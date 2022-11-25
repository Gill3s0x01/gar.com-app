import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Categories } from '../components/Categories'
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  )
}
