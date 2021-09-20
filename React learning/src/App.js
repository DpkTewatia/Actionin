// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/todos";



function App() {
 
  return (
    <>
     <Header title = "Doubt Session" searchBar={true} /> 
     <hr/>
     <Todos/><hr/> 
     <Footer/>  <hr/> 
          
     
     
    </>
  );
}

export default App;
