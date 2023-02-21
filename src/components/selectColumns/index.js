import { useDispatch, useSelector } from 'react-redux';

import {
  setAvailableColumns,
  setDisplayModal,
  setDnD,
  setHandlerAvailable,
  setHandlerSelected,
  setInputValue,
  setSelectedColumns,
} from '../../store/tableSlice';

import {
  SelectWrapper,
  SearchColumn,
  ApplyBtntWrapper,
  ApplyButton,
} from './selectColumns.styled';
import ColumnsSelectList from './columnsSelectList';

const SelectColumns = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.reducer.inputValue.trim());
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
      <ColumnsSelectList
        selectBoards={selectBoards}
        dropHandler={dropHandler}
        dragOverHandler={dragOverHandler}
        inputValue={inputValue}
        dragStartHandler={dragStartHandler}
        addColumnHandler={addColumnHandler}
        delColumnHandler={delColumnHandler}
      />
      <ApplyBtntWrapper>
        <ApplyButton onClick={handlerApplySelect}>Apply</ApplyButton>
      </ApplyBtntWrapper>
    </SelectWrapper>
  );
};

export default SelectColumns;
