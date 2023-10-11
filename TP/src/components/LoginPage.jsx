import React, { useRef } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const LoginPage = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        console.log("email entre", enteredEmail );
        console.log("password entre", enteredPassword );
        console.log("email recup", props.user.email );
        console.log("password recup", props.user.password );
        console.log("compte recup", props.user);


        const validUser = props.user && props.user.email === enteredEmail && props.user.password === enteredPassword;
        console.log(validUser);
        if (validUser) {
            alert('Welcome, vous etes connecté.');
            // Redirigez vers la page d'accueil ou le tableau de bord ici
        } else {
            alert('password or email  incorrectes.');
        }
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header className="text-center font-weight-bold" as="h2">Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label className="font-weight-normal" as="h4">
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-2"/> Adresse e-mail
                                    </Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="Entrez votre e-mail" required />
                                    <Form.Text className="text-muted">
                                        Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <Form.Label className="font-weight-normal" as="h4">
                                        <FontAwesomeIcon icon={faLock} className="mr-2"/> Mot de passe
                                    </Form.Label>
                                    <Form.Control ref={passwordRef} type="password" placeholder="Mot de passe" required />
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" className="font-weight-bold">
                                        <FontAwesomeIcon icon={faSignInAlt} className="mr-1"/> Login 
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    user: state.user, // récupère les données de l'utilisateur depuis Redux
});

export default connect(mapStateToProps)(LoginPage);