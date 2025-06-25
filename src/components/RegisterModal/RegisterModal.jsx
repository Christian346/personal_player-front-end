import BasicModalForForm from "../BasicModalForForm/BasicModalForForm";

function RegisterModal({ handleCloseActiveModal, isOpen }) {
  return (
    <div>
      <BasicModalForForm
        titleText="Register"
        buttonText="Sign up"
        // activeModal={activeModal}
        // isOpen={activeModal === "add-garment"}
        handleCloseActiveModal={handleCloseActiveModal}
        isOpen={isOpen}
        // onSubmit={/*(e) => onAddItem(e, { name })*/ handleSubmit} // to populate data on the onAddItem in App.js
      >
        <label htmlFor="name" className="modal__label">
          Name *{" "}
          <input
            name="name"
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            //   value={data.name} // {name}
            //  onChange={handleChange} //{handleNameChange}
          />
        </label>
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

        <label htmlFor="avatar" className="modal__label">
          Avatar URL *{" "}
          <input
            name="avatar"
            type="url"
            required
            className="modal__input"
            id="avatar"
            placeholder="Avatar Url"
            //    value={data.avatar} //{avatarUrl}
            //    onChange={handleChange} //{handleImageUrlChange}
          />
        </label>
      </BasicModalForForm>
    </div>
  );
}

export default RegisterModal;