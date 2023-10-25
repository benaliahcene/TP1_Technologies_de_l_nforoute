import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React , {Component} from "react";

// Importez vos composants
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/Home';
import Vols from './routes/ReserveVol';
import Chambres from './routes/HotelPage';
import Profil from './routes/Profil';
import Solde from './routes/Sold';
import Facturation from './routes/Facturation';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="d-flex flex-column min-vh-100">
                    <Menu />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vols" element={<Vols />} />
                            <Route path="/chambres" element={<Chambres />} />
                            <Route path="/profil" element={<Profil />} />
                            <Route path="/solde" element={<Solde />} />
                            <Route path="/facturation" element={<Facturation />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

