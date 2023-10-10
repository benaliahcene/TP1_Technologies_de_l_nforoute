import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";  // Importez vos actions ici

class Profil extends Component {
  state = {
    isEditing: false,
  };

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const updatedUser = {
      ...this.props.user,
      [name]: value,
    };

    this.props.updateUser(updatedUser); // Mise à jour dans Redux store
  };

  render() {
    const { user } = this.props;
    const { isEditing } = this.state;

    return (
      <div>
        <h1>Profil</h1>
        {isEditing ? (
          <div>
            <input
              type="text"
              name="nom"
              value={user.nom}
              onChange={this.handleInputChange}
            />
            {/* ... autres champs ... */}
            <button onClick={this.toggleEdit}>Terminer</button>
          </div>
        ) : (
          <div>
            <p>Nom: {user.nom}</p>
            {/* ... autres champs ... */}
            <button onClick={this.toggleEdit}>Modifier</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user, // Supposant que l'état de l'utilisateur est stocké sous 'user' dans votre Redux store
});

const mapDispatchToProps = {
  updateUser, // L'action pour mettre à jour l'utilisateur
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
