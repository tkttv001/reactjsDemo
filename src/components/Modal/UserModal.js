import React, { useState } from "react";

function Modal(props) {
  const [isShow, setShow] = useState;
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const confirmHandle = () => {
    console.log("delete", props.item.id);
    hideModal();
  };

  return <div>aaa</div>;
}

export default Modal;
