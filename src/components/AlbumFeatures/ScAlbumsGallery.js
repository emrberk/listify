import styled from 'styled-components';

const ScAlbumsGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;

  .result-info {
    margin: 10px 35px;
    font-size: 20px;
  }

  @media (max-width: 700px) {
    .result-info {
      text-align: center;
    }
  }
`;

export default ScAlbumsGallery;
