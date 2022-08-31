import styled from 'styled-components';
import { ITEM_TYPES } from '../utils/constants';

const ScSearchBar = styled.div`
  margin-top: 30px;
  .search {
    display: block;
    height: 50px;
    width: 330px;
    font-size: 24px;
    border: 2px solid black;
    border-radius: 30px;
    padding: 5px 5px 5px 10px;
    margin: 10px 10px 0px 10px;
  }
  .search:focus {
    outline: none;
  }
  .search-label {
    margin: 20px 35px;
    font-size: 24px;
    font-family:Arial, Helvetica, sans-serif;
  }
  .search-dropdown {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 5px;
    max-height: 300px;
    overflow: scroll;
    margin-left: 35px;
    padding: 0;
    margin-top: 0;
  }
  .dropdown-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(24, 24, 24);
    color: #fff;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  .dropdown-item-image {
    height: 100px;
    width: 100px;
    ${({ type }) => type === ITEM_TYPES.ARTIST ? `border-radius: 50px;` : ''}
  }

  .dropdown-item-name {
    margin-left: 20px;
    text-align: left;
  }
`;

export default ScSearchBar;