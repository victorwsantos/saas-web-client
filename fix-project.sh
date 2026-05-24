#!/bin/bash

echo "🔧 Corrigindo imports do projeto baseado nos erros do build..."

# =========================
# 1. COMPONENTES (Title/Text errados)
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../Title|./ui/title|g" \
-e "s|../Text|./ui/subtitle|g" \
-e "s|../../Title|./ui/title|g" \
-e "s|../../Text|./ui/subtitle|g" \
{} \;

# =========================
# 2. DESIGN SYSTEM (corrigir caminho errado)
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../../designSystem|../components/designSystem|g" \
-e "s|../designSystem|../components/designSystem|g" \
{} \;

# =========================
# 3. SERVICES (clients + orders)
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../../services/clients|../services/clients|g" \
-e "s|../../services/orders|../services/orders|g" \
-e "s|../../services|../services|g" \
{} \;

# =========================
# 4. AUTH CONTEXT
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../auth/ProtectedRoute|../routes/ProtectedRoute|g" \
-e "s|../auth/AuthContext|../context/authContext|g" \
{} \;

# =========================
# 5. PAGES (fix comum de import)
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../pages/Dashboard|../pages/Dashboard.js|g" \
-e "s|../pages/Clients|../pages/Clientes.js|g" \
-e "s|../pages/ClientDetails|../pages/ClientsDetails.js|g" \
{} \;

echo "✅ Correções aplicadas com base nos erros do webpack!"
echo "👉 Agora rode: npm run dev"
