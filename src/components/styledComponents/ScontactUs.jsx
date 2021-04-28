import styled from 'styled-components';

const StyledContactUs = styled.div`
  height: 80vh;
  display: flex;
  background-image: url(https://www.webratio.com/website/new-homepage/wr-site-contact-us-image-header.jpg);
  justify-content: space-between;

  .select {
    margin-top: 0.5rem;
    font-family: 'Courier New', Courier, monospace;
  }

  .textArea {
    margin-bottom: 0.5rem;
  }

  .form {
    margin-left: 5rem;
    padding-top: 1rem;
    font: inherit;
  }

  #name,
  #email,
  #option,
  #phone,
  #message {
    width: 100%;
    height: 2rem;
  }

  #message {
    height: 10rem;
  }

  .form-but {
    margin-left: 10rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
    height: 2rem;
    font-weight: 700;
  }

  .form p {
    color: white;
  }

  .form p button {
    margin-top: 0.5rem;
  }

  .form input {
    margin-top: 0.5rem;
  }

  .address {
    margin-top: 25vh;
    margin-right: 5rem;
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) and (max-width: 1150px) {
    .form {
      margin-left: 3rem;
    }
    .address {
      margin-right: 1rem;
      font-size: 1.3rem;
    }
  }
  .ContactUs {
    @media screen and (min-width: 625px) and (max-width: 800px) {
      .form {
        margin-left: 0.5rem;
      }
      .form-but {
        font-weight: 500;
      }
      .address {
        margin-right: 0.1rem;
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 300px) and (max-width: 625px) {
      .form {
        margin: auto;
        width: 90%;
      }
      .form-but {
        width: 50%;
      }
      .address {
        display: none;
      }
    }

    .address a {
      text-decoration: none;
      color: white;
      padding-top: 1rem;
    }

    .address p {
      padding-top: 1rem;
    }
  }
`;

export default StyledContactUs;