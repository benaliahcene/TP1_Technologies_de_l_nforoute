import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";
import { Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEdit } from '@fortawesome/free-solid-svg-icons';

class Profil extends Component {
  state = {
    isEditing: false,
    email: this.props.user.email,
    password: '',
  };

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const updatedUser = {
      ...this.props.user,
      email: this.state.email,
      password: this.state.password
    };

    this.props.updateUser(updatedUser);
    this.toggleEdit();
  };

  render() {
    const { user } = this.props;
    const { isEditing, email, password } = this.state;

    return (
     
      <div className="mt-4">
        <Card style={{ width: '30rem', margin: 'auto' }}>
          <Card.Header>
            <h1><FontAwesomeIcon icon={faUser} />Modification du Profil</h1>
          </Card.Header>
          <Card.Body>
            {isEditing ? (
              <Form>
                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label><FontAwesomeIcon icon={faLock} /> Mot de passe</Form.Label>
                  <Form.Control type="password" name="password" value={password} onChange={this.handleInputChange} />
                </Form.Group>

                <Button variant="success" onClick={this.handleSubmit}>Sauvegarder</Button>
                <Button variant="secondary" className="ml-2" onClick={this.toggleEdit}>Annuler</Button>
              </Form>
            ) : (
              <div>
                <p><strong>Nom:</strong> {user.nom}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* Mot de passe n'est généralement pas affiché pour des raisons de sécurité */}
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
  user: state.user, 
});

const mapDispatchToProps = {
  updateUser, 
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
