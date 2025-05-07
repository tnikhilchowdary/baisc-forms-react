
import './App.css';
import ControlledComponents from './components/ControlledComponents';
import OptionComponent from './components/OptionComponent';
import Checkbox from './components/Checkbox';
import FormVaidation from './components/FormValidation';
import Uncontrolled from './components/uncontrolled';
function App() {
  return (
    <div className="App">
      <ControlledComponents />
      <OptionComponent />
      <Checkbox />
      <FormVaidation />
      <Uncontrolled />
    </div>
  );
}


export default App;
