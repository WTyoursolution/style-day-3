import Figure from 'react-bootstrap/Figure';

function MyFigure() {
  return (
    <Figure>
      <Figure.Image
        width={200}
        height={200}
        alt="myMountainImage"
        src="/mountainImg.jpg"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default MyFigure;