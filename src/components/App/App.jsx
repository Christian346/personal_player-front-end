import './App.css'
import Header from '../Header/Header'
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
function App() {
 

  return (
    <div className="page">
      
      <div className="page__content">
        <Header />
        {/*Routes with route and protectedRouter its switch between pages */}
        <Main />
        <Footer />
      </div>
      
      {/*Modals sections */}
    </div>
  );
}

export default App
