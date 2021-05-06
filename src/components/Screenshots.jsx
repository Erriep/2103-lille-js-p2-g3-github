import StyledScreenShot from './styledComponents/SscreenShots';

function Screenshots() {
  return (
    <StyledScreenShot>
      <h1 className="titleAPI">EXAMPLES OF API</h1>
      <article className="Events">
        <img className="event1" src="./img/screenshot1.png" alt="ScreenShots" />
        <img className="event2" src="./img/screenshot2.png" alt="ScreenShots" />
      </article>
    </StyledScreenShot>
  );
}

export default Screenshots;
