const TableBody = ({ selectedColumns, sortedUsers }) => {
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
