import './App.css';

//Importing components
import PersonCard from './components/PersonCard';
import Base from './components/Base';

function App() {
  return (
    <div className="App">
      <Base>
        <PersonCard firstname={"Sara"} lastname ={"Smith"} age={35} haircolor={"Blond"} />
        <PersonCard firstname={"John"} lastname ={"John"}  age={20} haircolor={"Black"}/>
        <PersonCard firstname={"leo"} lastname ={"What"} age={35} haircolor={"Brown"}/>
        <PersonCard firstname={"Rita"} lastname ={"Notsure"} age={35} haircolor={"White"}/>
      </Base>
    </div>
  );
};

export default App;
