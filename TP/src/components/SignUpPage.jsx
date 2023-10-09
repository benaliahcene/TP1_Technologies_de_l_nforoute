import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserPlus, faTimes, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope, faLock, faUserPlus, faTimes, faUser, faCalendarAlt);

const SignUpPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const emailRef = useRef(null);
    const emailConfirmRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailRef.current.value !== emailConfirmRef.current.value) {
            setErrorMessage("Les adresses e-mail ne correspondent pas.");
            return;
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        setErrorMessage('');  // Si tout est bon, on réinitialise le message d'erreur
        // Ici, vous pouvez procéder à la soumission de votre formulaire
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header className="text-center font-weight-bold" as="h2">Sing up</Card.Header>
                        <Card.Body>
                            {!showForm ? (
                                <div className="text-center">
                                    <p>Vous n'avez pas de compte?</p>
                                    <Button variant="primary" onClick={() => setShowForm(true)}>
                                         <FontAwesomeIcon icon={faUserPlus} className="mr-1"/>
                                    S'inscrire</Button>
                                </div>
                            ) : (
                                <>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicFirstName" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faUser} className="mr-2"/> Prénom
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre prénom" required />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicLastName" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faUser} className="mr-2"/> Nom
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre nom" required />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicDOB" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2"/> Date de naissance
                                            </Form.Label>
                                            <Form.Control type="date" required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/> Adresse e-mail
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Entrez votre e-mail" required ref={emailRef} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmailConfirm" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/> Confirmation de l'e-mail
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Confirmez votre e-mail" required ref={emailConfirmRef} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword" className="mb-3">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faLock} className="mr-2"/> Mot de passe
                                            </Form.Label>
                                            <Form.Control type="password" placeholder="Choisissez un mot de passe" required ref={passwordRef} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPasswordConfirm" className="mb-4">
                                            <Form.Label className="font-weight-normal">
                                                <FontAwesomeIcon icon={faLock} className="mr-2"/> Confirmez le mot de passe
                                            </Form.Label>
                                            <Form.Control type="password" placeholder="Confirmez votre mot de passe" required ref={passwordConfirmRef} />
                                        </Form.Group>

                                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                                        <div className="d-flex justify-content-center">
                                            <Button variant="primary" type="submit" className="font-weight-bold me-3">
                                                <FontAwesomeIcon icon={faUserPlus} className="mr-1"/> Valider l'inscription
                                            </Button>

                                            <Button variant="danger" onClick={() => setShowForm(false)}>
                                                <FontAwesomeIcon icon={faTimes} className="me-1"/> Annuler
                                            </Button>
                                        </div>

                                    </Form>
                                    <div className="mt-3 text-center">
                                        <p>Avez-vous déjà un compte? <span className="text-primary cursor-pointer" onClick={() => setShowForm(false)}>Connectez-vous maintenant</span></p>
                                    </div>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpPage;
