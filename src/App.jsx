import Grain from './components/Grain';
import Cursor from './components/Cursor';
import StatusBar from './components/StatusBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Grain />
      <Cursor />
      <StatusBar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
