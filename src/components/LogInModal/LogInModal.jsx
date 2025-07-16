import BasicModalForForm from "../BasicModalForForm/BasicModalForForm";

function LogInModal({
    isOpen,
    handleCloseActiveModal,
    onLogin
}){

    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin()
    }
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
            // value={data.email} // {email} //
            //  onChange={handleChange} //{handleEmailInput}
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
            // value={data.password} //{password} //
            // onChange={handleChange} //{handlePassword}
          />
        </label>
      </BasicModalForForm>
    );
}

export default LogInModal;