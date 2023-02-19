import styled from 'styled-components';

const SelectItem = styled.div`
  display: flex;
  justify-content: 8space-between;
  align-items: center;
  margin: 5px 0;
  height: 36px;
  padding: 0 20px;
  font-size: 14px;
  color: white;
  background-color: #1f2127;
  border-radius: 5px;
  box-shadow: 0 1px 2px black;
  cursor: pointer;
  &:hover {
    background-color: #191b1f;
  }
`;
const DelIcon = styled.span`
  margin-right: 0;
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

const SelectItemComponent = ({
  item,
  board,
  dragStartHandler,
  addColumnHandler,
  delColumnHandler,
}) => {
  return (
    <SelectItem
      onClick={() =>
        board.title === 'Available Columns'
          ? addColumnHandler(item)
          : delColumnHandler(item)
      }
      draggable={true}
      onDragStart={(e) => dragStartHandler(board, item)}
    >
      {item}
      {board.title === 'Available Columns' ? '' : <DelIcon>&#10006;</DelIcon>}
    </SelectItem>
  );
};

export default SelectItemComponent;
