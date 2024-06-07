import {useState} from "react";
import {Link} from "react-router-dom"
import Login from "./Login"
import SignUp from"./SignUp"
import {Navbar, Nav, NavItem, NavLink, Modal, Tab, Container} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {}

export default function NavHeader() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Navbar className="header-body">
      <h2 className="header-title">Finding Fido</h2>
      <Container className="header">
        <NavItem>
          <NavLink as={Link} to="/">Home</NavLink>
          {/* <Link  >Home</Link> */}
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/profile">Social</NavLink>
          {/* <Link to="/profile">User Profile</Link> */}
        </NavItem>
        {/* <NavItem>
          <NavLink as={Link} to="/signup">Sign Up</NavLink>
          {/* <Link to="/profile">User Profile</Link> 
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/login">Login</NavLink>
          {/* <Link to="/profile">User Profile</Link> 
        </NavItem> */}

       <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      </Container>
    </Navbar>
    <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
        
    </>
  );
}

 