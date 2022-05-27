import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Tetra from './pages/Tetra';
import Catalog from './pages/Catalog';
import Main from './pages/Main';
import PocSolutions from './pages/Poc';
import ScrollToTop from './components/ScrollToTop';
import CatalogDetail from './pages/CatalogDetail';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Projects from './pages/Projects';
import Feedback from './pages/Feedback';
import CreateProduct from './pages/CreateProduct';
import Contacts from './pages/Contacts';
import LegalInfo from './pages/LegalInfo';
import CreateMarker from './pages/CreateMarker';
import HyteraHytalk from './pages/HyteraHytalk';
import Login from './pages/Login';
import TechSupport from './pages/TechSupport';
import EditProduct from './pages/EditProduct';
import EditMarker from './pages/EditMarker';

import './style.scss';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/tetra" element={<Tetra />} />
        <Route path="/catalog/poc-solutions" element={<PocSolutions />} />
        <Route path="/catalog/:catalogName/:categoryName" element={<CatalogDetail />} />
        <Route path="/catalog/:catalogName/:categoryId/:productId" element={<ProductDetail />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:solutionName" element={<SolutionDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/create-marker" element={<CreateMarker />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/legal-info" element={<LegalInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hytera-hytalk" element={<HyteraHytalk />} />
        <Route path="/support" element={<TechSupport />} />
        <Route path="/edit/:categoryId/:productId" element={<EditProduct />} />
        <Route path="/edit-marker/:markerId" element={<EditMarker />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
