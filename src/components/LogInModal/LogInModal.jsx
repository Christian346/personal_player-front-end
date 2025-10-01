import BasicModalForForm from "../BasicModalForForm/BasicModalForForm";
import {useState} from 'react';

function LogInModal({
    isOpen,
    handleCloseActiveModal,
    onLogin
}){
  const [logInInfo, setlogInInfo] = useState({
    email: "",
    password: ""
  });
  //const [password,setPassword] = useState("") // these 2 states are local

   const handleChange = (e)=>{
    const { name, value } = e.target; // this is looking for the attributes

     setlogInInfo((prevData) => ({
       ...prevData,
       [name]: value, // 'email' : 'sdfjsdkf'
     }));
  }
//controlled vs uncontrolled component in react.

    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin(logInInfo/*.email , logInInfo.password*/);
    }
    //default behavior for html for search it
    return (
      <BasicModalForForm
        titleText="Log In"
        buttonText="Log in"
        // activeModal={activeModal}
        // isOpen={activeModal === "add-garment"}
        handleCloseActiveModal={handleCloseActiveModal}
        isOpen={isOpen}
        // we need to add an on submit prop for the modal to receive it 
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="modal__label">
          Email*{" "}
          <input
            name="email"
            type="email"
            className="modal__input"
            id="email"
            placeholder="Email"
            value={logInInfo.email} // {email} //
            onChange={handleChange} //{handleEmailInput}
          />
        </label>

        <label htmlFor="password" className="modal__label">
          Password*{" "}
          <input
            name="password"
            type="password"
            required
            className="modal__input"
            id="password"
            placeholder="Password"
            value={logInInfo.password} //{password} //
            onChange={handleChange} //{handlePassword}
          />
        </label>
      </BasicModalForForm>
    );
}

export default LogInModal;