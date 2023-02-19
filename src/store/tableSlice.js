import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'state',
  initialState: {
    users: null,
    sortBy: { col: 'id', dir: 'asc' },
    availableColumns: ['id', 'email', 'address', 'website'],
    selectedColumns: ['name', 'phone', 'company', 'username'],
    selectItems: [
      {
        title: 'Available Columns',
        items: ['id', 'email', 'address', 'website'],
      },
      {
        title: 'Selected Columns',
        items: ['name', 'phone', 'company', 'username'],
      },
    ],
    displayModal: 'none',
    inputValue: '',
    DnD: { board: '', item: '' },
    error: '',
  },
  reducers: {
    setUsers(state, action) {
      state.users = [...action.payload];
    },
    setSortBy(state, action) {
      state.sortBy = {
        ...{
          col: action.payload,
          dir:
            state.sortBy.col === action.payload
              ? state.sortBy.dir === 'asc'
                ? 'desc'
                : 'asc'
              : 'asc',
        },
      };
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setDnD(state, action) {
      state.DnD = { ...action.payload };
    },
    setSelectModal(state, action) {
      state.selectModal = action.payload;
    },
    setDisplayModal(state, action) {
      state.displayModal = action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setHandlerAvailable(state, action) {
      typeof action.payload === 'string'
        ? (state.selectItems[0].items = [
            ...state.selectItems[0].items,
            action.payload,
          ])
        : (state.selectItems[0].items = [...action.payload]);
    },
    setHandlerSelected(state, action) {
      typeof action.payload === 'string'
        ? (state.selectItems[1].items = [
            ...state.selectItems[1].items,
            action.payload,
          ])
        : (state.selectItems[1].items = [...action.payload]);
    },
    setAvailableColumns(state, action) {
      state.availableColumns = [...action.payload];
    },
    setSelectedColumns(state, action) {
      state.selectedColumns = [...action.payload];
    },
  },
});

export default tableSlice.reducer;
export const {
  setSelectModal,
  setUsers,
  setDisplayModal,
  setInputValue,
  setAvailableColumns,
  setSelectedColumns,
  setHandlerAvailable,
  setHandlerSelected,
  setDnD,
  setError,
  setSortBy,
} = tableSlice.actions;
