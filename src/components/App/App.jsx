import{useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ProfileEditModal from '../ProfileEditModal/ProfileEditModal';

function App() {

  const [activeModal,setActiveModal]= useState("");

  const closeActiveModal = () =>{
    setActiveModal("")
  }
  const handleEditProfileModalBtnClick=()=>{
    setActiveModal("ProfileEditModal")
  }


  return (
    <div className="page"> 
      <div className="page__content">
        <Header
        handleEditProfileModalBtnClick={handleEditProfileModalBtnClick}
        />
        {/*Routes with route and protectedRouter its switch between pages */}
        <Main />
        <Footer />
      </div>
      
      {/*Modals sections */}

      {activeModal === "ProfileEditModal" && (
       <ProfileEditModal
       handleCloseActiveModal = {closeActiveModal}
       isOpen={activeModal === "ProfileEditModal"}
       // onEdit={handleEdit}
       />
      )}
    </div>
  );
}

export default App
