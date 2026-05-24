#!/bin/bash

echo "🧼 Limpando imports quebrados..."

# =========================
# 1. CORRIGIR DESIGN SYSTEM QUEBRADO
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../componen../components/designSystem|../components/designSystem|g" \
-e "s|../components../components/designSystem|../components/designSystem|g" \
-e "s|../../components/designSystem|../components/designSystem|g" \
-e "s|../designSystem|../components/designSystem|g" \
{} \;

# =========================
# 2. CORRIGIR ROUTES (Dashboard / pages)
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../pages/Dashboard.js|../pages/Dashboard|g" \
-e "s|../pages/Clientes.js|../pages/Clientes|g" \
-e "s|../pages/ClientsDetails.js|../pages/ClientsDetails|g" \
{} \;

# =========================
# 3. LIMPAR DUPLICAÇÃO ../..
# =========================
find src -type f -name "*.js" -exec sed -i \
-e "s|../..|..|g" \
{} \;

echo "✅ Limpeza finalizada"
echo "👉 agora rode: npm run dev"
