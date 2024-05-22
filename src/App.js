import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './components/Home.js';
import  Edit  from "./components/students/Edit.js";
import View from "./components/students/View.js"


function App() {
  return (
    <>
    hello
    {/* <BrowserRouter>
       <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/view/:id" Component={View}/>
          <Route exact path="/edit/:id" Component={Edit}/>
       </Routes>
    </BrowserRouter> */}
    </>

    );
}

export default App;
