import {
  Header,
  Tracks,
  Bikes,
  Rental,
  Contact,
  Footer,
} from './containers/exports';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Tracks />
        <Bikes />
        <Rental />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
