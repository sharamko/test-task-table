import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer, ModalContent } from './modal.styled';
import { setDisplayModal, setInputValue } from '../../store/tableSlice';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.reducer.displayModal);
  const closeModal = () => {
    dispatch(setDisplayModal('none'));
    dispatch(setInputValue(''));
  };
  return (
    <ModalContainer displayModal={displayModal} onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
