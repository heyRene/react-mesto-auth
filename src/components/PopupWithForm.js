function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_func_${props.name} ${
        props.isOpen ? "popup_opened" : false
      }`}
      onClick={props.onOverlayClose}
      onKeyDown={props.onEscClose}
    >
      <div className={`popup__container popup__container_type${props.name}`}>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button
            className={`popup__submit-button popup__submit-button_func_${props.name}`}
            type="submit"
          >
            {props.buttonName}
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}
export default PopupWithForm;
