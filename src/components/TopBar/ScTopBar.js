import styled from 'styled-components';

const ScTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;

  h1 {
    height: 100%;
    display: block;
    margin: 10px;
    
  }
  .topbar-tab {
    height: 100%;
    color: #fff;
    background-color: rgb(18, 18, 18, 255);
    border: none;
    font-size: 36px;
    cursor: pointer;
    
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
`;

export default ScTopBar;