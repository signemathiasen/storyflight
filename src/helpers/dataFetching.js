const settings = {
  baseUrl: 'https://signemariemathiasen.dk/kea/4_semester/storyflight/wordpress',
  menuPath: '/wp-json/menus/v1/',
  generalPath: '/wp-json/wp/v2/',
  endpoints: {
    pages: 'pages',
    cases: 'case',
    customerLogo: 'customer_logo',
    services: 'services_item',
    chosenCases: 'chosen_case',
    menus: 'menus',
  },
  // change object name
  menuSlugs: {
    primaryMenu: '/primary-menu',
    contactInformation: '/contact-information',
    forside: '/2',
    // add all slugs
  },
};

export async function getData(endpoint, slug) {
  const isEndpointValid = settings.endpoints[endpoint];
  const isSlugValid = settings.menuSlugs[slug];

  if (isEndpointValid === undefined) return console.error('Path does not exist');
  const { baseUrl, menuPath, generalPath, menuSlugs } = settings;

  // change console.error
  //   if (endpoint === 'menus' && isSlugValid === undefined) return console.error('Slug does not exist');

  const response = await fetch(
    `${baseUrl}${endpoint === 'menus' ? menuPath : generalPath}${endpoint}${
      slug === undefined ? '' : menuSlugs[slug]
    }`
  );
  const data = await response.json();
  console.log(
    `${baseUrl}${endpoint === 'menus' ? menuPath : generalPath}${endpoint}${
      slug === undefined ? '' : menuSlugs[slug]
    }`
  );
  return data;
}
