import React, { Component } from "react";

class Resultat extends Component {
  state = {
    vols: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Remplacez cette URL par l'URL de votre API
    fetch("https://travelpayouts.github.io/slate/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau lors de la requête.");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ vols: data, loading: false });
      })
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div>Chargement...</div>;
    }

    if (this.state.error) {
      return <div>Erreur: {this.state.error.message}</div>;
    }

    return (
      <div>
        <h1>Résultats des vols</h1>
        <ul>
          {this.state.vols.map((vol) => (
            <li key={vol.id}>
              {vol.depart} - {vol.destination} ({vol.dateDepart})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Resultat;
