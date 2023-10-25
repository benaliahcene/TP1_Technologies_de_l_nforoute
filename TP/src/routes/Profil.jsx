import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEdit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const NavigateWrapper = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} />;
  }
}

class Profil extends Component {
    constructor(props) {
      super(props);
      const user = props.user || {};
      this.state = {
        isEditing: false,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        dateOfBirth: user.dateOfBirth || '',
        password: user.password || '',
        showAlert: false
      };
    }

    toggleEdit = () => {
      this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
    };

    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = (event) => {
      event.preventDefault(); 
      const updatedUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        dateOfBirth: this.state.dateOfBirth,
        password: this.state.password
      };

      this.props.updateUser(updatedUser);
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 3000); 
      this.toggleEdit();
    };

    handleLogout = (event) => {
      event.preventDefault(); 
      const b = "";
      const s = 0.0;
      const emptyUser = {
        firstName: b,
        lastName: b,
        email: b,
        dateOfBirth: b,
        password: b,
        solde: s
      };
      console.log(emptyUser);
      this.props.updateUser(emptyUser);
      this.props.navigate('/');
    };
    

    render() {
      const { user } = this.props;
      const { isEditing, firstName, lastName, email, dateOfBirth, password, showAlert } = this.state;

      if (!user.firstName) {
        return (
          <div className=" d-flex align-items-center justify-content-center">
            <Card style={{ width: '30rem' }}>
              <Card.Body className="text-center">
                <p>Aucun utilisateur connecté.</p>
                <Button className="w-100 mt-3" variant="primary" onClick={() => this.props.navigate('/')}>Login</Button>
              </Card.Body>
            </Card>
          </div>
        );
      }

      return (
        <div className="d-flex justify-content-center align-items-center ">
          <Card style={{ width: '30rem' }}>
            <Card.Header>
              <h1><FontAwesomeIcon icon={faUser} /> Modification du Profil</h1>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert variant="success" onClose={() => this.setState({ showAlert: false })} dismissible>
                  Vos informations de profil ont été mises à jour avec succès.
                </Alert>
              )}
              {isEditing ? (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label><FontAwesomeIcon icon={faUser} /> Nom</Form.Label>
                    <Form.Control type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label><FontAwesomeIcon icon={faUser} /> Prénom</Form.Label>
                    <Form.Control type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label><FontAwesomeIcon icon={faCalendarAlt} /> Date de Naissance</Form.Label>
                    <Form.Control type="date" name="dateOfBirth" value={dateOfBirth} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label><FontAwesomeIcon icon={faLock} /> Mot de passe</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Button variant="success" type="submit">Sauvegarder</Button>
                  <Button variant="secondary" className="ml-2" onClick={this.toggleEdit}>Annuler</Button>
                </Form>
              ) : (
                <div>
                  <p><strong>Nom:</strong> {firstName}</p>
                  <p><strong>Prénom:</strong> {lastName}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Date de Naissance:</strong> {dateOfBirth}</p>
                  <Button variant="primary" onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} /> Modifier</Button>
                </div>
              )}
              <Button variant="danger" className="mt-2" onClick={this.handleLogout}>Logout</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigateWrapper(Profil));
