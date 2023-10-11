import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React , {Component} from "react";

// Importez vos composants
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/Home';
import Vols from './routes/ReserveVol';
import Chambres from './routes/ReserveRoom';
import Profil from './routes/Profil';
import Solde from './routes/Sold';
import Facturation from './routes/Facturation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vols" element={<Vols />} />
                    <Route path="/chambres" element={<Chambres />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/solde" element={<Solde />} />
                    <Route path="/facturation" element={<Facturation />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
