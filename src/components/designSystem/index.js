// =========================
// DASHBOARD
// =========================
export const dashboardStyles = {
  container: `
    min-h-screen
    bg-gray-100
    p-4
    md:p-6
  `,

  headerTitle: `
    text-3xl
    font-bold
    text-gray-900
  `,

  cardsContainer: `
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-4
    mt-6
  `,

  ordersContainer: `
    mt-10
  `,
}

// =========================
// CARD
// =========================
export const cardStyles = {
  container: `
    bg-white
    p-6
    rounded-2xl
    shadow-md
    border
    border-gray-100
    flex
    flex-col
    justify-between
    gap-4
    transition
    hover:shadow-xl
    hover:-translate-y-1
  `,

  title: `
    text-xl
    font-bold
    text-gray-900
  `,

  description: `
    text-gray-500
    mt-2
    text-sm
  `,

  badge: `
    text-xs
    text-blue-500
    mt-2
    font-medium
  `,

  button: `
    mt-6
    bg-blue-500
    hover:bg-blue-600
    transition
    text-white
    py-2
    px-4
    rounded-xl
    w-full
  `,
}

// =========================
// NAVBAR
// =========================
export const navStyles = {
  container: `
    w-full
    flex
    flex-wrap
    items-center
    justify-between
    gap-4
    px-4
    py-4
    bg-white
    border-b
    border-gray-100
  `,

  left: `
    flex
    flex-wrap
    items-center
    gap-4
  `,

  right: `
    ml-auto
    flex
    items-center
  `,

  link: `
    text-gray-600
    hover:text-gray-900
    transition
    cursor-pointer
    font-medium
    text-sm
    whitespace-nowrap
  `,

  activeLink: `
    text-blue-600
    font-semibold
  `,

  searchInput: `
    w-full
    max-w-full
    md:w-80
    border
    border-gray-200
    rounded-lg
    px-3
    py-2
    outline-none
    focus:ring-2
    focus:ring-blue-200
  `,

  signOut: `
    bg-red-500
    hover:bg-red-600
    text-white
    px-3
    py-2
    rounded-lg
    transition
    text-sm
    whitespace-nowrap
  `,
}

// =========================
// FINANCIAL
// =========================
export const financialStyles = {
  sectionTitle: `
    text-2xl
    font-bold
    text-gray-900
  `,

  summaryGrid: `
    mt-6
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-4
  `,
}

// =========================
// ORDERS PAGE
// =========================
export const orderPageStyles = {
  container: `
    p-4
    md:p-6
  `,

  headerTitle: `
    text-3xl
    font-bold
    text-gray-900
  `,

  filtersContainer: `
    flex
    flex-wrap
    gap-3
    mt-4
  `,

  select: `
    border
    p-2
    rounded-lg
    bg-white
  `,

  list: `
    mt-6
    flex
    flex-col
    gap-3
  `,

  card: `
    p-4
    bg-white
    border
    border-gray-100
    rounded-xl
    cursor-pointer
    hover:bg-gray-50
    hover:shadow-md
    transition
  `,

  orderTitle: `
    text-lg
    font-semibold
    text-gray-900
  `,

  text: `
    text-gray-500
  `,

  status: `
    text-sm
    mt-1
    font-medium
  `,
}

// =========================
// SEARCH PAGE
// =========================
export const searchStyles = {
  container: `
    p-4
    md:p-6
  `,

  input: `
    w-full
    border
    rounded-lg
    p-3
    mb-6
    outline-none
    focus:ring-2
    focus:ring-blue-200
  `,

  resultList: `
    flex
    flex-col
    gap-3
  `,

  card: `
    p-4
    border
    border-gray-100
    rounded-xl
    bg-white
    cursor-pointer
    hover:bg-gray-50
    hover:shadow-md
    transition
  `,

  title: `
    font-semibold
    text-lg
    text-gray-900
  `,

  subtitle: `
    text-sm
    text-gray-500
  `,
}

// =========================
// ORDER DETAILS
// =========================
export const orderDetailsStyles = {
  container: `
    p-4
    md:p-6
    flex
    flex-col
    gap-4
    bg-gray-100
    min-h-screen
  `,

  title: `
    text-3xl
    font-bold
    text-gray-900
  `,

  text: `
    text-gray-600
    text-base
  `,

  price: `
    text-2xl
    font-bold
    text-green-600
    mt-2
  `,

  imagesGrid: `
    mt-6
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
  `,

  image: `
    w-full
    h-64
    object-cover
    rounded-2xl
    shadow-md
    bg-white
  `,
}

// =========================
// ORDER LIST
// =========================
export const orderListStyles = {
  container: `
    flex
    flex-col
    gap-4
    mt-6
  `,

  card: `
    bg-white
    border
    border-gray-100
    rounded-2xl
    p-4
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
  `,

  title: `
    text-lg
    font-semibold
    text-gray-900
  `,

  description: `
    text-sm
    text-gray-500
    mt-1
  `,

  status: `
    text-sm
    font-medium
    mt-2
    text-blue-600
  `,
}

// =========================
// FORM
// =========================
export const formStyles = {
  container: `
    max-w-4xl
    mx-auto
    bg-white
    rounded-2xl
    shadow-sm
    border
    border-gray-100
    p-6
  `,

  form: `
    flex
    flex-col
    gap-6
  `,

  title: `
    text-3xl
    font-bold
    text-gray-900
  `,

  description: `
    text-gray-500
  `,

  input: `
    w-full
    border
    border-gray-200
    rounded-xl
    px-4
    py-3
    outline-none
    focus:ring-2
    focus:ring-blue-200
  `,

  submitButton: `
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-3
    rounded-xl
    transition
    mt-4
  `,
}