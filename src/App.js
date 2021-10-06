
import { NavBar } from "./components/00Navbar/NavBar";
import './App.scss';

import { Header } from "./components/01Header/Header";
import { Services } from "./components/02Services/Services";
import { Content } from "./components/02Services/Content";
import { Portofolio } from "./components/03Portofolio/Portofolio";
import { Statistics } from "./components/04Statistics/Statistics"

function App() {
  return (
    <div >
        <NavBar />
        <Header />
        <Services />
        <Content />
        <Portofolio />  
        <Statistics />    
    </div>
  );
}

export default App;
