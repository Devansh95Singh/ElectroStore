import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'


 const App = () => {
  return (
    <Router>
      <main>
      <Header />
      <Container>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      </Container>
      <Footer />
      </main>
    </Router>
  );
}

export default App;
