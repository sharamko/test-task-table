import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 600px;
  padding: 20px;
`;
export const SearchColumn = styled.input`
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
export const ColListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
`;
export const ApplyBtntWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
export const ColList = styled.div`
  width: 46%;
  height: 400px;
  padding: 20px;
  background-color: #191b1f;
  border-radius: 10px;
`;
export const ApplyButton = styled.button`
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
export const TitleSelect = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;
export const SelectItem = styled.div`
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
export const DelIcon = styled.span`
  margin-right: 0;
  margin-left: auto;
  &:hover {
    color: red;
  }
`;
