import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Meals from './pages/Meals'
import Product from './pages/Product'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Meals" element={<Meals />} />
    <Route
      path="/product/:id"
      element={<Product image={''} title={''} description={''} />}
    />
  </Routes>
)

export default Rout
