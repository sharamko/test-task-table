import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setDisplayModal, setError, setUsers } from '../store/tableSlice';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Loading = styled.div`
  width: 100%;
  font-size: 32px;
  color: white;
  text-align: center;
`;

const SelectButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 15px;
  font-size: 16px;
  color: white;
  background-color: #0275d8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5a95f5;
  }
`;
const TableTag = styled.table`
  width: 100%;
  color: white;
  text-align: center;
`;

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducer.users);
  const error = useSelector((state) => state.reducer.error);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)))
      .catch((error) => new Error(dispatch(setError(error.message))));
  }, []);

  const showModal = () => {
    dispatch(setDisplayModal('flex'));
  };

  return (
    <>
      <SelectButton onClick={showModal}>Select Columns</SelectButton>
      {error ? (
        <Loading>{error}</Loading>
      ) : users ? (
        <TableTag>
          <TableHeader />
          <TableBody />
        </TableTag>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

export default Table;
