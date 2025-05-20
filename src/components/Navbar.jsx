import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='navBar' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navBar' eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navBar' eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </>
  );
}

export default Navbar;