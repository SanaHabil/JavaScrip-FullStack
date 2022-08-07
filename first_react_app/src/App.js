import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Base from './components/Base';
import Nav from './components/Nav';

function App() {
return (
  <div className="App">
    <Base>
      <Nav/>
      <HelloWorld name={"Bobb"} age={35} />
      <HelloWorld name={"Sam"} age={20} />
      <HelloWorld name={"Sara"} age={40} />
      <HelloWorld name={"John"} age={25} />
    </Base>
    
  </div>
);
}


export default App;