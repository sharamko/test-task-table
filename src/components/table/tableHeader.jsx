import { Thead, TagTr, SortIcon } from './table.styled';

const TableHeader = ({ users, selectedColumns, sortBy, setSortBy }) => {
  return (
    <Thead>
      <TagTr>
        {Object.keys(users[0]).map((col) =>
          selectedColumns.includes(col) ? (
            <th
              key={`${col}_key`}
              onClick={() => (col === 'phone' ? null : setSortBy(col))}
            >
              {col.toUpperCase()}
              {col === 'phone' ? (
                ''
              ) : col === sortBy.col ? (
                sortBy.dir === 'asc' ? (
                  <SortIcon> &#11014;</SortIcon>
                ) : (
                  <SortIcon> &#11015;</SortIcon>
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
