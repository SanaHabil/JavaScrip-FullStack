import './App.css';

//Importing components
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname={"Sara"} lastname ={"Smith"} age={35} haircolor={"Blond"} />
      <PersonCard firstname={"John"} lastname ={"John"}  age={20} haircolor={"Black"}/>
      <PersonCard firstname={"leo"} lastname ={"What"} age={35} haircolor={"Brown"}/>
      <PersonCard firstname={"Rita"} lastname ={"Notsure"} age={35} haircolor={"White"}/>
    </div>
  );
};

export default App;
