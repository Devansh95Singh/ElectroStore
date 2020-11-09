import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';


 const App = () => {
  return (
    <div>
      <main>
      <Header />
      <Container>
       <HomeScreen />
      </Container>
      <Footer />
      </main>
    </div>
  );
}

export default App;
