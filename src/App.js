import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Authentication/Login';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Signup from './Pages/Authentication/Signup';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import ViewDetail from './Pages/Purchase/ViewDetail';
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
          <Route path="/product" element={<Products></Products>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/manageProduct" element={
              <RequireAuth>
                  <ManageProducts></ManageProducts>
              </RequireAuth>
          }></Route>
          <Route path="/viewDetail/:productId" element={
              <RequireAuth>
                  <ViewDetail></ViewDetail>
              </RequireAuth>
          }>
          </Route>
          <Route path="/product/:productId" element={
              <RequireAuth>
                  <Purchase></Purchase>
              </RequireAuth>
          }></Route>
          <Route path="dashboard" element={
              <RequireAuth>
                  <Dashboard></Dashboard>
              </RequireAuth>}>
                <Route index element={<MyOrders></MyOrders>}></Route>
                <Route path="addReview" element={<AddReview></AddReview>}></Route>
                <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
                <Route path="payment/:id" element={<Payment></Payment>}></Route>
              </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
       </Routes>
       <Footer></Footer>
       <ToastContainer />
    </div>
  );
}

export default App;
