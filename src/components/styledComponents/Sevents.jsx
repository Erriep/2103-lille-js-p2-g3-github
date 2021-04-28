import styled from 'styled-components';

const StyledEvent = styled.div`
  .Events {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    position: relative;
    bottom: 40px;
    width: 40%;
    box-shadow: 5px 5px 5px rgb(95, 92, 92);
    margin: 15px;
  }

  .eventsTitle {
    padding: 30px;
    text-align: center;
    font-size: 2.6em;
    font-weight: bolder;
    height: 12vh;
    background-color: rgb(0, 217, 255);
    color: grey;
  }
  @media (max-width: 700px) {
    .eventsTitle {
      font-size: small;
    }
  }
`;
export default StyledEvent;