import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, InputGroup, Form, Button, Alert } from 'react-bootstrap';
import { updateUser } from '../actions/userActions';

const Sold = ({ user, updateUser }) => {
    const [inputValue, setInputValue] = useState("");
    const [showAlert, setShowAlert] = useState(false); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleRecharge = () => {
        const newSolde = parseFloat(inputValue) + user.solde;
        updateUser({
            ...user,
            solde: newSolde
        });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };
    console.log(user.firstName);
    // If the user's name is empty, display a message prompting them to connect
    if (!user.firstName) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <Card style={{ width: "30rem", padding: '20px' }}>
                    <Card.Body>
                        <Card.Text>
                            Veuillez vous connecter pour alimenter votre solde.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    return (
<div className="d-flex justify-content-center align-items-center ">
<Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title style={{ marginBottom: '20px' }}>Solde actuel: {user.solde}$</Card.Title>

                    {showAlert && (
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            Votre solde a été rechargé avec succès.
                        </Alert>
                    )}

                    <InputGroup style={{ marginBottom: '10px' }}>
                        <Form.Control
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Recharger votre solde"
                            aria-label="Solde"
                        />
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outline-primary" onClick={handleRecharge}>Alimenter</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = {
    updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sold);
