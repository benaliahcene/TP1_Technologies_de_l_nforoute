import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";
import { Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEdit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class Profil extends Component {
    constructor(props) {
      super(props);
  
      const user = props.user || {}; // Set a default empty object if user is undefined
  
      this.state = {
        isEditing: false,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        dateOfBirth: user.dateOfBirth || '',
        password: user.password || '',
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
    event.preventDefault(); // Prévenir le rechargement de la page

    const updatedUser = {
      ...this.props.user,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      password: this.state.password
    };

    this.props.updateUser(updatedUser);
    this.toggleEdit();
  };

  render() {
    const { user } = this.props;
    const { isEditing, firstName, lastName, email, dateOfBirth, password } = this.state;
 console.log(user); console.log(nom);
    return (
      <div className="mt-4">
        <Card style={{ width: '30rem', margin: 'auto' }}>
          <Card.Header>
            <h1><FontAwesomeIcon icon={faUser} /> Modification du Profil</h1>
          </Card.Header>
          <Card.Body>
            {isEditing ? (
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faUser} /> Nom</Form.Label>
                  <Form.Control type="text" name="nom" value={firstName} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faUser} /> Prénom</Form.Label>
                  <Form.Control type="text" name="prenom" value={lastName} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faCalendarAlt} /> Date de Naissance</Form.Label>
                  <Form.Control type="date" name="dateNaissance" value={dateOfBirth} onChange={this.handleInputChange} />
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
                <p><strong>Nom:</strong> {user.firstName}</p>
                <p><strong>Prénom:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Date de Naissance:</strong> {user.dateOfBirth}</p>
                <Button variant="primary" onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} /> Modifier</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.userData && state.userData.user ? state.userData.user : {},
});

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
