import './css/navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useNavigation from "../hooks/use-navigation";

function CustomNavbar() {
    const { navigate, currentPath } = useNavigation();

    const links = [
        { label: 'Time Tracker', path: '/' },
        { label: 'Calendar', path: '/calendar' },
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Reports', path: '/reports' },
        { label: 'Projects', path: '/projects' },
        { label: 'Clients', path: '/clients' },
        { label: 'Tags', path: '/tags' }
    ];

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    }

    const renderedLinks = links.map((link) => {
        return (
            <Nav.Link key={link.path} eventKey={link.path}>
                {link.label}
            </Nav.Link>
        );
    })

    return (
        <Navbar collapseOnSelect expand="lg" className="main-navigation bg-body-tertiary" fixed="top">
            <Container>
            <Navbar.Brand onClick={() => handleSelect("/")}>
            <img alt="Time Tracker" src="/logo128.png" width="30" height="30" className="d-inline-block align-top" />{' '}
            Time Tracker
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={currentPath} onSelect={handleSelect}>
                        {renderedLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;