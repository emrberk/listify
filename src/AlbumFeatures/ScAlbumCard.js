import styled from 'styled-components';

export const ScAlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px;

  .album-name {
    text-align: center;
    max-width: 640px;
    font-size: 48px;
    margin: 20px 10px;
    word-wrap: break-word;
  }

  .album-features {
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    &-item {
      max-height: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-items: space-between;
      margin: 10px;
      font-size: 25px;
      text-shadow: 3px 3px #000;
    }
  }

  .album-cover-blur {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
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
  @media (max-width: 700px) {
    margin: 10px 10px;
    .album-card {
      width: 300px;
      height: 300px;
    }
    .album-features-item {
      font-size: 12px;
    }
  }
`;