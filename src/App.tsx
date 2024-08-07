import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './components/store'
import Footer from './components/Footer'

import Rout from './routes'

import { GlobalCss, Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Container>
          <Rout />
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
