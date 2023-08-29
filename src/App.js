import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Main from './components/main';
import Visual from './components/visual';
import Voice from './components/voice';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  // var tabState = 'main';
  const [tabState, setTabState]= useState('main');
  
  useEffect(()=>{console.log("uE:"+ tabState)});
  const activeTab = (mode) => {
    // tabState = mode;
    setTabState(mode);
    console.log(tabState);
  }
  
  console.log("tabState:"+tabState);
  
  return (
    <div className="App">
      <nav class="navbar bg-primary navbar-dark sticky-top" >
        <div class="container-fluid">
              <div class="d-flex justify-content-between p-2 align-items-baseline" style={{width:'inherit'}}>
                <div class="text-white h3">Mouse Tooltip Translator</div>
                <div class="d-flex flex-row">
                  <button class="nav-link m-1" href="#">
                    <i class="bi bi-clock-history white" style={{color: 'white', fontSize:'24px'}}></i>
                  </button>
                  <button class="nav-link m-1" href="#">
                    <i class="bi bi-list white" style={{color: 'white', fontSize:'24px'}}></i>
                  </button>
                </div>
              </div>
          <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist" style={{width:'inherit'}}>
            <li class="nav-item" role="presentation">
              {tabState ==='main'? 
              <button class="nav-link active" id="main-tab" data-bs-toggle="tab" data-bs-target="#main" type="button" role="tab" aria-controls="main" aria-selected="true"><span class="text-primary text-uppercase">main</span></button>
              :<button class="nav-link" id="main-tab" data-bs-toggle="tab" data-bs-target="#main" type="button" role="tab" aria-controls="main" aria-selected="false" onClick={()=>activeTab('main')}><span class="text-white text-uppercase">main</span></button>}
            </li>
            <li class="nav-item" role="presentation">
              {tabState ==='visual'?
              <button class="nav-link active" id="visual-tab" data-bs-toggle="tab" data-bs-target="#visual" type="button" role="tab" aria-controls="visual" aria-selected="true"><span class="text-primary text-uppercase">visual</span></button>
              :<button class="nav-link" id="visual-tab" data-bs-toggle="tab" data-bs-target="#visual" type="button" role="tab" aria-controls="visual" aria-selected="false" onClick={()=>activeTab('visual')}><span class="text-white text-uppercase">visual</span></button>}
              </li>
            <li class="nav-item" role="presentation">
              {tabState === 'voice'?
              <button class="nav-link active" id="voice-tab" data-bs-toggle="tab" data-bs-target="#voice" type="button" role="tab" aria-controls="voice" aria-selected="true"><span class="text-primary text-uppercase">voice</span></button>
              :<button class="nav-link" id="voice-tab" data-bs-toggle="tab" data-bs-target="#voice" type="button" role="tab" aria-controls="voice" aria-selected="false"  onClick={()=>activeTab('voice')}><span class="text-white text-uppercase">voice</span></button>
              }
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active p-2" id={tabState} role="tabpanel" aria-labelledby="main-tab">
          {tabState === 'main' ? <Main/> : tabState === 'visual' ? <Visual/> :  <Voice/> }
        </div>
      </div>
    </div>
  );
}

export default App;
