import logo from './logo.svg';
import './App.css';
import './assets/css/app.css';

import SideBar from "./components/SideBar.js";
import ContentWrapper from "./components/ContentWrapper.js";
function App() {
  return (
    <div className="App">
      <div id="wrapper">
      <SideBar/>
      <ContentWrapper/>
      </div>
    </div>
  );
}

export default App;
