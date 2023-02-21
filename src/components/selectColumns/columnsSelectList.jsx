import { ColListWrapper, ColList, TitleSelect } from './selectColumns.styled';
import SelectItemComponent from './selectItem';

const ColumnsSelectList = ({
  selectBoards,
  dropHandler,
  dragOverHandler,
  inputValue,
  dragStartHandler,
  addColumnHandler,
  delColumnHandler,
}) => {
  return (
    <ColListWrapper>
      {selectBoards.map((board) => (
        <ColList
          key={`${board.title}_key`}
          id={`${board.title}_id`}
          onDrop={(e) => dropHandler(e, board)}
          onDragOver={(e) => dragOverHandler(e)}
        >
          <TitleSelect>{board.title}</TitleSelect>
          {board.title === 'Selected Columns'
            ? board.items.map((item) => (
                <SelectItemComponent
                  key={`${item}_key_item`}
                  item={item}
                  board={board}
                  dragStartHandler={dragStartHandler}
                  addColumnHandler={addColumnHandler}
                  delColumnHandler={delColumnHandler}
                />
              ))
            : board.items
                .filter((el) => el.includes(inputValue))
                .map((item) => (
                  <SelectItemComponent
                    key={`${item}_key_item`}
                    item={item}
                    board={board}
                    dragStartHandler={dragStartHandler}
                    addColumnHandler={addColumnHandler}
                    delColumnHandler={delColumnHandler}
                  />
                ))}
        </ColList>
      ))}
    </ColListWrapper>
  );
};

export default ColumnsSelectList;
