import { useState } from "react";
import FormList from "./forms/FormList";
import { NewForm } from "./forms/NewForm";

function App() {
  const [data, setData] = useState([]);


  function saveFormDatas(formData) {
    
    setData((prevData) => [...prevData, formData]);
    
  }
  return (
    <div className="App">
      
      <NewForm onSaveData={saveFormDatas} />
      
      <FormList data={data} />
    </div>
  );
}

export default App;
