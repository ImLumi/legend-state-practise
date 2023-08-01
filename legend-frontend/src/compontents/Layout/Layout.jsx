import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Container>
                <Outlet />
                <div>
                    footer
                </div>
            </Container>
        </>
    )
}