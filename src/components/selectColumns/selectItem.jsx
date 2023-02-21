import { SelectItem, DelIcon } from './selectColumns.styled';

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
