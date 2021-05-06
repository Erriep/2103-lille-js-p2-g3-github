import StyledDesription from './styledComponents/Sdescription';

function Description() {
  return (
    <StyledDesription>
      <div className="Description">
        <h1>Description</h1>
        <p>
          APIs are methods and protocols to connect with other libraries and
          applications. It stands for Application Programming Interface.The API
          provides the ability to provide access to a set of commonly used
          functions that are possible to exchange data between applications.
          Most websites apply to the Web API to connect, retrieve data, or
          update the database. To provide the user a friendly environment to
          find information of the other developer on the Website of Github,
          which is very popular for all Web developers, we have made this
          website where users can find all the things that they want to know
          about one developer like the lastest repositories, the starred
          repositories or anything they want to know. Hopefully, users will have
          a pleasant experience when they visit our website.
        </p>
      </div>
    </StyledDesription>
  );
}
export default Description;
