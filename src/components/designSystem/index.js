// =========================
// DASHBOARD
// =========================
export const dashboardStyles = {
  container: `
    min-h-screen
    bg-gray-100
    p-6
  `,

  headerTitle: `
    text-3xl
    font-bold
    text-gray-900
  `,

  cardsContainer: `
    grid
    grid-cols-1
    md:grid-cols-4
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

// =========================
// ORDERS PAGE
// =========================
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

// =========================
// SEARCH PAGE
// =========================
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
    rounded-xl
    bg-white
    cursor-pointer
    hover:bg-gray-50
    transition
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

export const orderDetailsStyles = {
    container: `
        p-6
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
