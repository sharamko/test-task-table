import styled from 'styled-components';

export const ModalContainer = styled.div`
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
export const ModalContent = styled.div`
  position: relative;
  background: #1f2127;
  min-width: 100px;
  min-height: 50px;
  border-radius: 10px;
`;
