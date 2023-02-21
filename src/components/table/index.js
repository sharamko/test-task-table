import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDisplayModal,
  setError,
  setSortBy,
  setUsers,
} from '../../store/tableSlice';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
import { Loading, SelectButton, TableTag } from './table.styled';

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducer.users);
  const error = useSelector((state) => state.reducer.error);
  const sortBy = useSelector((state) => state.reducer.sortBy);
  const selectedColumns = useSelector((state) => state.reducer.selectedColumns);
  const sortedUsers = useMemo(() => {
    if (users) {
      switch (sortBy.col) {
        case 'id':
          return [...users].sort((a, b) =>
            sortBy.dir === 'desc'
              ? b[sortBy.col] - a[sortBy.col]
              : a[sortBy.col] - b[sortBy.col]
          );
        case 'address':
          return [...users].sort((a, b) =>
            sortBy.dir === 'desc'
              ? b[sortBy.col].city.localeCompare(a[sortBy.col].city)
              : a[sortBy.col].city.localeCompare(b[sortBy.col].city)
          );
        case 'company':
          return [...users].sort((a, b) =>
            sortBy.dir === 'desc'
              ? b[sortBy.col].name.localeCompare(a[sortBy.col].name)
              : a[sortBy.col].name.localeCompare(b[sortBy.col].name)
          );
        default:
          return [...users].sort((a, b) =>
            sortBy.dir === 'desc'
              ? b[sortBy.col].localeCompare(a[sortBy.col])
              : a[sortBy.col].localeCompare(b[sortBy.col])
          );
      }
    } else {
      return users;
    }
  }, [sortBy, users]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)))
      .catch((error) => new Error(dispatch(setError(error.message))));
  }, []);

  const showModal = () => {
    dispatch(setDisplayModal('flex'));
  };
  const handlerSort = (col) => {
    dispatch(setSortBy(col));
  };

  return (
    <>
      <SelectButton onClick={showModal}>Select Columns</SelectButton>
      {error ? (
        <Loading>{error}</Loading>
      ) : users ? (
        <TableTag>
          <TableHeader
            users={users}
            selectedColumns={selectedColumns}
            sortBy={sortBy}
            setSortBy={handlerSort}
          />
          <TableBody
            selectedColumns={selectedColumns}
            sortedUsers={sortedUsers}
          />
        </TableTag>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Table;
