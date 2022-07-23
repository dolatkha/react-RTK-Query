import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./component/Navbar";
import RouterApp from "./RouterApp";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;
