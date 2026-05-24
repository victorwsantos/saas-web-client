import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import ProtectedRoute from "..ut..otectedRoute"

import Login from "..g..gin"
import Dashboard from "..g..shboard"
import Clients from "..g..ientes"
import ClientDetails from "..g..ientsDetails"
import Orders from "..g..ders"
import OrderDetails from "..g..derDetails"
import Search from "..g..arch"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path..gin"
          element={<Logi..
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
           ..otectedRoute>
          }
        />

        <Route
          path..shboard"
          element={
            <ProtectedRoute>
              <Dashboard />
           ..otectedRoute>
          }
        />

        <Route
          path..ients"
          element={
            <ProtectedRoute>
              <Clients />
           ..otectedRoute>
          }
        />

        <Route
          path..ien..d"
          element={
            <ProtectedRoute>
              <ClientDetails />
           ..otectedRoute>
          }
        />

        <Route
          path..ders"
          element={
            <ProtectedRoute>
              <Orders />
           ..otectedRoute>
          }
        />

        <Route
          path..de..d"
          element={
            <ProtectedRoute>
              <OrderDetails />
           ..otectedRoute>
          }
        />

        <Route
          path..arch"
          element={
            <ProtectedRoute>
              <Search />
           ..otectedRoute>
          }
        />

     ..utes>
   ..owserRouter>
  )
}