import { useState } from "react";
import FormList from "./forms/FormList";
import { NewForm } from "./forms/NewForm";

function App() {
  const [data, setData] = useState([]);


  function saveFormDatas(formData) {
    // ...prevData это прежние данные, formData данные которые пришли с компонента newForm
    setData((prevData) => [...prevData, formData]);
    
  }
  return (
    <div className="App">
      {/* new form компонент, который создает тудушки */}
      <NewForm onSaveData={saveFormDatas} />
      {/* formlist компонент, который рендерит тудушки (визуализирует) */}
      <FormList data={data} />
    </div>
  );
}

export default App;
