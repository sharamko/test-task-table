import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  setAvailableColumns,
  setDisplayModal,
  setDnD,
  setHandlerAvailable,
  setHandlerSelected,
  setInputValue,
  setSelectedColumns,
} from '../store/tableSlice';
import SelectItemComponent from './selectItem';

const SelectWrapper = styled.div`
  width: 600px;
  padding: 20px;
`;
const SearchColumn = styled.input`
  width: 46%;
  height: 30px;
  margin-bottom: 15px;
  padding: 0 10px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: black;
`;
const ColListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
`;
const ApplyBtntWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
const ColList = styled.div`
  width: 46%;
  height: 400px;
  padding: 20px;
  background-color: #191b1f;
  border-radius: 10px;
`;
const ApplyButton = styled.button`
  margin-top: 15px;
  padding: 5px 30px;
  font-size: 14px;
  color: white;
  background-color: #0275d8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5a95f5;
  }
`;
const TitleSelect = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const SelectColumns = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.reducer.inputValue.trim());
  const users = useSelector((state) => state.reducer.users);
  const handlerSelected = useSelector(
    (state) => state.reducer.selectItems[1].items
  );
  const handlerAvailable = useSelector(
    (state) => state.reducer.selectItems[0].items
  );
  const selectBoards = useSelector((state) => state.reducer.selectItems);
  const DnD = useSelector((state) => state.reducer.DnD);
  const addColumnHandler = (col) => {
    dispatch(setHandlerAvailable(handlerAvailable.filter((el) => el !== col)));
    dispatch(setHandlerSelected(col));
  };
  const delColumnHandler = (col) => {
    dispatch(setHandlerSelected(handlerSelected.filter((el) => el !== col)));
    dispatch(setHandlerAvailable(col));
  };
  const handlerApplySelect = () => {
    dispatch(setAvailableColumns(handlerAvailable));
    dispatch(setSelectedColumns(handlerSelected));
    dispatch(setDisplayModal('none'));
    dispatch(setInputValue(''));
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dragStartHandler = (board, item) => {
    dispatch(setDnD({ board: board.title, item: item }));
  };
  const dropHandler = (e, board) => {
    e.preventDefault();
    if (board.title === DnD.board) {
      return;
    } else {
      board.title === 'Available Columns'
        ? delColumnHandler(DnD.item)
        : addColumnHandler(DnD.item);
    }
  };

  return (
    <SelectWrapper>
      <SearchColumn
        type="text"
        value={inputValue}
        onChange={(e) => dispatch(setInputValue(e.target.value))}
        placeholder={'Search available columns...'}
      />
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
      <ApplyBtntWrapper>
        <ApplyButton onClick={handlerApplySelect}>Apply</ApplyButton>
      </ApplyBtntWrapper>
    </SelectWrapper>
  );
};

export default SelectColumns;
