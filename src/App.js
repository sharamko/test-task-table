import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import Table from './components/table';
import { lazy, Suspense } from 'react';
const Modal = lazy(() => import('./components/modal'));
const SelectColumns = lazy(() => import('./components/selectColumns'));

const Container = styled.div`
  min-height: 526px;
  margin: 30px;
  padding: 20px;
  background-color: #1a1b1f;
  border-radius: 10px;
`;

function App() {
  return (
    <>
      <Container>
        <Table />
      </Container>
      <Suspense>
        <Modal>
          <SelectColumns />
        </Modal>
      </Suspense>
      <GlobalStyles />
    </>
  );
}

export default App;
