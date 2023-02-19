import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/tableSlice';
import styled from 'styled-components';

const Thead = styled.thead`
  background-color: rgb(255 255 255 / 0.1);
`;
const TagTr = styled.tr`
  cursor: pointer;
  user-select: none;
`;

const TableHeader = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducer.users);
  const sortBy = useSelector((state) => state.reducer.sortBy);
  const selectedColumns = useSelector((state) => state.reducer.selectedColumns);
  return (
    <Thead>
      <TagTr>
        {Object.keys(users[0]).map((col) =>
          selectedColumns.includes(col) ? (
            <th key={`${col}_key`} onClick={() => dispatch(setSortBy(col))}>
              {col.toUpperCase()}
              {col === 'phone' ? (
                ''
              ) : col === sortBy.col ? (
                sortBy.dir === 'asc' ? (
                  <span> &#11014;</span>
                ) : (
                  <span> &#11015;</span>
                )
              ) : (
                ''
              )}
            </th>
          ) : null
        )}
      </TagTr>
    </Thead>
  );
};

export default TableHeader;
