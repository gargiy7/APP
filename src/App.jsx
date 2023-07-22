import './App.css';
import header from './components/header';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {
  return (
    <>
      {header()}
      <Body />
      <Footer />

    </>
  )
}
