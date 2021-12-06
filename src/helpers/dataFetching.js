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
    kontakt: '/111',
    // add all slugs
  },
};

export async function getData(endpoint, slug) {
  const urlEndpoint = settings.endpoints[endpoint];
  const urlSlug = settings.menuSlugs[slug];

  // check validity of endpoint
  if (urlEndpoint === undefined) return console.error('Path does not exist');

  const { baseUrl, menuPath, generalPath, menuSlugs } = settings;

  // check validity of slug
  if ((endpoint === 'menus' && urlSlug === undefined) || (endpoint === 'pages' && urlSlug === undefined))
    return console.error('Slug does not exist');

  const response = await fetch(
    `${baseUrl}${endpoint === 'menus' ? menuPath : generalPath}${urlEndpoint}${
      slug === undefined ? '' : menuSlugs[slug]
    }`
  );
  const data = await response.json();
  console.log(
    `${baseUrl}${endpoint === 'menus' ? menuPath : generalPath}${urlEndpoint}${
      slug === undefined ? '' : menuSlugs[slug]
    }`
  );
  return data;
}
