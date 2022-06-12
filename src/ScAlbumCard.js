import styled from 'styled-components';

export const ScAlbumCard = styled.div`
  display: flex;
  flex-direction: column;

  .album-name {
    margin: 10px 30px;
  }

  .album-features {
    display: flex;
    flex-direction: column;

    &-item {
      margin: 10px;
      font-size: 25px;
    }
  }

  .album-cover-blur {
    position: absolute;
    z-index: -1;
    filter: blur(30px);
    transform: rotateY(180deg);
  }

  .album-card:hover .album-card-inner {
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }

  .album-card {
    background-color: transparent;
    display: block;
    height: 640px;
    width: 640px;
    margin: 10px 30px;
    perspective: 1000px;

    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    &-front, &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    &-front {
      background-color: #fff;
      color: black;
    }

    &-back {
      background-color: #000;;
      color: white;
      transform: rotateY(180deg);
    }
  }
`;