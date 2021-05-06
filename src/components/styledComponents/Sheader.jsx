import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  background-color: #0e6476;
  height: 195px;

  .title h1 {
    font-size: 3.5em;
    margin-top: 90px;
    font-weight: 900;
    color: #f5f7f7;
  }

  .sousTitre h2 {
    font-weight: 520;
    color: #f5f7f7;
  }

  .logo {
    margin-top: 55px;
    margin-left: 15vw;
    width: 140px;
    height: 120px;
    margin-left: 5vw;
    margin-right: 2vw;
  }

  .search {
    display: block;
    margin-top: 100px;
  }

  .searchBar {
    border-radius: 10px;
    font-size: large;
    padding: 10px;
    width: 20vw;
    margin-left: 25vw;
  }

  .miniUser {
    display: flex;
    position: relative;
    width: 22vw;
    background-color: rgb(204, 220, 223);
    border: 1px solid #000;
    margin-top: 10px;
    margin-left: 25vw;

    img {
      width: 45%;
      margin-right: 20px;
      border-radius: 5px 0px 0px 5px;
      @media (max-width: 700px) {
        display: none;
      }
    }

    h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    p {
      padding: 2px;
    }
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    height: 160px;

    .title h1 {
      font-size: 2.5em;
    }

    .searchBar {
      font-size: smaller;
      margin-right: 15px;
      margin-top: 90px;
      margin-left: 10vw;
    }

    .search {
      display: block;
      width: 50px;
      height: 10px;
      margin: 1%;
    }

    .logo {
      margin-top: 65px;
      width: 100px;
      height: 80px;
    }

    .miniUser {
      width: 30vw;
      margin-left: 7vw;
    }
  }
`;

export default StyledHeader;
