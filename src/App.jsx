import StatusBar from './components/StatusBar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <StatusBar />
      <main>
        <Hero />
        <Capabilities />
        <Projects />
        <Experience />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
