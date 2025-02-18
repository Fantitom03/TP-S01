import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Properties from './components/Properties';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <MainContent />
        <Properties />
      </main>
      <Footer />
    </>
  );
}

export default App;