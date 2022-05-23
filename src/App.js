import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
