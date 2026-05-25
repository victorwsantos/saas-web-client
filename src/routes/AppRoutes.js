import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import ProtectedRoute from "./ProtectedRoute"

import Layout from "../pages/layout/Layout"

import Login from "../pages/Login"
import Clients from "../pages/Clients"
import ClientDetails from "../pages/ClientDetails"
import Orders from "../pages/Orders"
import OrderDetails from "../pages/OrderDetails"
import Search from "../pages/Search"
import MainPage from "../pages/MainPage"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ROTAS PRIVADAS */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<MainPage />}
          />

          <Route
            path="/clients"
            element={<Clients />}
          />

          <Route
            path="/clients/:id"
            element={<ClientDetails />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:id"
            element={<OrderDetails />}
          />

          <Route
            path="/search"
            element={<Search />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}