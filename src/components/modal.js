import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setDisplayModal, setInputValue } from '../store/tableSlice';

const ModalContainer = styled.div`
  position: fixed;
  display: ${({ displayModal }) => displayModal};
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  background: #1f2127;
  min-width: 100px;
  min-height: 50px;
  border-radius: 10px;
`;

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
