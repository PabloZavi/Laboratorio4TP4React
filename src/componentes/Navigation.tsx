import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
              <Nav className="mr-auto">
                
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/dondeestamos">Dónde estamos</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
                </Nav>
              <Form>
                <tr>
                  <td><FormControl type="text" placeholder="Search" className="mr-sm-2" /></td>
                  <td><Button variant="outline-light">Search</Button></td>
                </tr>
                
                
              </Form>
            </Navbar>
        </>
    )
}