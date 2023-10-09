import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useRef } from "react";
// import { useNavigation  } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

library.add(faEnvelope, faLock, faSignInAlt);

const LoginPage = () => {
    let compte_data = [
        {
            email: "benalihassan845@gmail.com",
            password: "Benali2014"
        },
    ];

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const history = useNavigation();

    const handleLogin = (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const validUser = compte_data.find(user => user.email === enteredEmail && user.password === enteredPassword);

        if (validUser) {
            alert('Informations d\'identification correctes.');

            // history.push('/HomePage'); // Utilisez '/dashboard' ou le chemin que vous avez défini pour votre HomePage
        } else {
            alert('Informations d\'identification incorrectes.');
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

export default LoginPage;
