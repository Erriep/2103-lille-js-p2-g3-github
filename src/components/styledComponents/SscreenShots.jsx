import styled from 'styled-components';

const StyledScreenShot = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  background-size: cover;
  height: 100%;
  img {
    position: relative;
    bottom: 40px;
    margin-left: 3%;
    width: 45%;
    box-shadow: 5px 5px 5px rgb(95, 92, 92);
  }
  .API {
    margin: 0 40px;
  }
  .titleAPI {
    padding: 30px;
    text-align: center;
    font-size: 2.6em;
    font-weight: bolder;
    height: 12vh;
    background-color: grey;
    color: rgb(0, 217, 255);
  }
  @media (max-width: 700px) {
    .titleAPI {
      font-size: small;
    }
  }
`;

export default StyledScreenShot;