
import './App.css';
import { useState } from 'react';
import { Users } from './components/Users';
import { Button } from './UI/Button';

function App() {
  const [openUs, setOpenUs] = useState(false);
  const [getUs, setGetUS] = useState(true);

  const submitChangeHandler = () => {
    setGetUS((prevState) => !prevState);
    setOpenUs(true)
  };

  const closeUs = ()=>{
    setOpenUs(false)
    setGetUS((prevState) => !prevState);
  }
  return (
    <div className="App">
       {getUs && <Button onClick={submitChangeHandler}>Click me!</Button>}
      {openUs &&<Users closeUs= {closeUs}/>}
    </div>
  );
}

export default App;
