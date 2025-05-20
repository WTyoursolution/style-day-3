import Figure from 'react-bootstrap/Figure';

function MyFigure() {
  return (
    <Figure className='image d-flex flex-column align-items-center'>
      <Figure.Image
        width={400}
        height={400}
        alt="myMountainImage"
        src="/mountainImg.jpg"
      />
      <Figure.Caption className='imageCaption'>
        Beautiful image of clouds wrapping mountains
      </Figure.Caption>
    </Figure>
  );
}

export default MyFigure;