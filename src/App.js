
import { NavBar } from "./components/00Navbar/NavBar";
import './App.scss';
import { Header } from "./components/01Header/Header";
import { Services } from "./components/02Services/Services";

function App() {
  return (
    <div className='cover'>
        <NavBar />
        <Header />
        <Services />      
    </div>
  );
}

export default App;
