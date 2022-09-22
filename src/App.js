import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //create state that is the total amount of bill
  //create state for percentage to tip
  const [total, setTotal] = useState(null)

  




  return (
    <div className="App d-flex flex-column bd-highlight mb-3">
      <h1>Tip Calculator</h1>
      <div class="p-2 bd-highlight mb-3">
        <label for="formGroupExampleInput" class="form-label">Total: </label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="65.32"/>
      </div>
      <div class="p-2 bd-highlight mb-5">
        <label for="formGroupExampleInput2" class="form-label">Percentage tip: </label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="20%"/>
      </div>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
