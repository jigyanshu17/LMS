
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/Navbar';
import Login from './pages/login'
import HeroSection from './pages/student/HeroSection';

function App() {
 

  return (
    <main>
      <Button>LMS project</Button>
      <Navbar />
      <HeroSection />
      {/* <Login /> */}
    </main>
  );
}

export default App
