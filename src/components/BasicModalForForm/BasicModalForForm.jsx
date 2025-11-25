import "./BasicModalForForm.css";

function BasicModalForForm ({
    children,
    buttonText,
    titleText,
    handleCloseActiveModal,
    isOpen,
    onSubmit
}) {
    return (
      <div
        className={`modal ${
          isOpen && "modal_opened"
        }`}
      >
        <div className="modal__content">
          <h2 className="modal__title">{titleText}</h2>
          <button
            onClick={handleCloseActiveModal}
            className="modal__close"
            type="button"
          ></button>

          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
}
export default BasicModalForForm;