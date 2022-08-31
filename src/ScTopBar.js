import styled from 'styled-components';

const ScTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  h1 {
    display: block;
  }
  .topbar-tab {
    height: 100%;
    font-size: 36px;
    
    @media screen and (max-width: 500px) {
      font-size: 24px;
    }
  }
`;

export default ScTopBar;