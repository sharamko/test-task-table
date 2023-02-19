import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const TableBody = () => {
  const users = useSelector((state) => state.reducer.users);
  const selectedColumns = useSelector((state) => state.reducer.selectedColumns);
  const sortBy = useSelector((state) => state.reducer.sortBy);
  const sortedUsers = useMemo(() => {
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
      case 'phone':
        return users;

      default:
        return [...users].sort((a, b) =>
          sortBy.dir === 'desc'
            ? b[sortBy.col].localeCompare(a[sortBy.col])
            : a[sortBy.col].localeCompare(b[sortBy.col])
        );
    }
  }, [sortBy, users]);
  return (
    <tbody>
      {sortedUsers.map((user) => (
        <tr key={`${user.name}_${user.id}`}>
          {Object.entries(user).map(([key, value]) =>
            selectedColumns.includes(key) ? (
              typeof value !== 'object' ? (
                <td key={`${user.username}_${user.id}_${value}`}>{value}</td>
              ) : (
                <td
                  key={`${user.username}_${user.id}_${
                    value.name || value.city
                  }`}
                >
                  {value.name || `${value.city} ${value.street} ${value.suite}`}
                </td>
              )
            ) : null
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
