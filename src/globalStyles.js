import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(90deg, #8c2381, #ee6c26);
    font-family: Geneva, Arial, Helvetica, sans-serif;
  }

  table,
  tr,
  th,
  td{  
  border-collapse: collapse;
  border: 1px solid white;
  padding: 10px 5px;
  }
  th{  
  min-width: 38px;
  }

  
`;
