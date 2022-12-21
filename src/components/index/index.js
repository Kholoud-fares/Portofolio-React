import { Component } from "react";
import Home from './../Home/index'
import Work from './../Work/index'
import About from './../About/index'
import Profile from './../Profile/index'
import Portofolio from './../Portofolio/index'
import SocialMedia from './../SocialMedia/index'
import Footer from './../Footer'
class Index extends Component {
  render(){
  return (
    <div>
       <Home/>
       <Work/>
       <Portofolio/>
       <Profile/>
       <About/>
       <SocialMedia/>
       <Footer/>
    </div>
  );
}}

export default Index;