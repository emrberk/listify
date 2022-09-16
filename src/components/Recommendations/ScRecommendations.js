import styled from 'styled-components';

const ScRecommendations = styled.div`
  .search-bars {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

`;

export default ScRecommendations;
