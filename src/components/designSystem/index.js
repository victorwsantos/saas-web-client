export const dashboardStyles = {
  container: `
    min-h-screen
    bg-gray-100
    p-8
  `,

  headerContainer: `
    mb-8
  `,

  title: `
    text-4xl
    font-bold
    text-gray-900
  `,

  subtitle: `
    text-gray-500
    mt-2
  `,

  cardsGrid: `
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-6
  `,
}

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
  `,

  title: `
    text-2xl
    font-bold
    text-gray-900
  `,

  description: `
    text-gray-500
    mt-2
  `,

  badge: `
    text-sm
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
    py-3
    px-4
    rounded-xl
    w-full
  `,
}

export const navStyles = {
  container: `
    w-full
    flex
    items-center
    justify-between
    px-6
    py-4
    bg-white
    border-b
    border-gray-100
  `,

  left: `
    flex
    items-center
    gap-6
  `,

  right: `
    flex
    items-center
    gap-4
  `,

  link: `
    text-gray-600
    hover:text-gray-900
    transition
    cursor-pointer
    font-medium
  `,

  activeLink: `
    text-blue-600
    font-semibold
  `,

  searchInput: `
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
    px-4
    py-2
    rounded-lg
    transition
  `,
}
export const orderPageStyles = {
  container: `
    p-6
  `,

  headerTitle: `
    text-3xl
    font-bold
  `,

  filtersContainer: `
    flex
    gap-3
    mt-4
  `,

  select: `
    border
    p-2
    rounded
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
    rounded-xl
    cursor-pointer
    hover:bg-gray-50
    transition
  `,

  orderTitle: `
    text-lg
    font-semibold
  `,

  text: `
    text-gray-500
  `,

  status: `
    text-sm
    mt-1
  `,
}


export const dashboardStyles = {
  container: `
    p-6
  `,

  cardsContainer: `
    grid
    grid-cols-1
    md:grid-cols-4
    gap-4
  `,

  ordersContainer: `
    mt-10
  `,

  title: `
    text-3xl
    font-bold
  `,
}

export const searchStyles = {
  container: `
    p-6
  `,

  input: `
    w-full
    border
    rounded-lg
    p-3
    mb-6
    outline-none
  `,

  resultList: `
    flex
    flex-col
    gap-3
  `,

  card: `
    p-4
    border
    rounded-xl
    bg-white
    cursor-pointer
    hover:bg-gray-50
  `,

  title: `
    font-semibold
    text-lg
  `,

  subtitle: `
    text-sm
    text-gray-500
  `,
}