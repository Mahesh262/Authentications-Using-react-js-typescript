import React, {lazy,Suspense } from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'

const LazyComponent = lazy(() => import('./Forms'));
const RedirectedForm = lazy(() => import('./RedirectedForm'))
 const Popovers =lazy(()=>import('./Popovers'));


function App() {

  return (
    <div className="App">
      <div>
        
        
        
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={ <LazyComponent />}/>
        <Route path="/RedirectedForm" element={<RedirectedForm />} />
        <Route path="/Popovers" element={<Popovers/>} />
        {/* <Navigate  to='/Forms' replace={true}/> */}
        </Routes>
        </Suspense>
        
      </div>
    </div>
  );
}

export default App;
