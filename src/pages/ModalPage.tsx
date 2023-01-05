import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handlerOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button title='I Accept' colorVariant='primary' onClick={handleClose} />
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important aggrement for you to accept</p>
    </Modal>
  );
  return (
    <div className='relative'>
      <Button
        title='Open Modal'
        colorVariant='secondary'
        typeVariant='rounded'
        onClick={handlerOpen}
      />
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
