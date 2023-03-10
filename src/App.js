import { Component } from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Navbar from './components/Navbar/index'
import Contact from './components/Contact/index'
import Index from './components/index/index'
class App extends Component {
  render(){
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<Index />} />
       <Route path="contact" element={<Contact />} />
       </Routes>
    </BrowserRouter>
  );
}}

export default App;
