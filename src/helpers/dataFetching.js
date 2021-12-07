const settings = {
  baseUrl: 'https://signemariemathiasen.dk/kea/4_semester/storyflight/wordpress',
  menuPath: '/wp-json/menus/v1/',
  generalPath: '/wp-json/wp/v2/',
  endpoints: {
    pages: 'pages',
    cases: 'case',
    customerLogo: 'customer_logo?per_page=20',
    services: 'services_item',
    servicesImage: 'services_image',
    chosenCases: 'chosen_case',
    menus: 'menus',
    videoTypes: 'videotypes',
  },
  // change object name
  menuSlugs: {
    primaryMenu: '/primary-menu',
    contactInformation: '/contact-information',
    forside: '/2',
    kontakt: '/111',
    viTilbyder: '/107',
    // add all slugs
  },
};

export async function getData(endpoint, slug = '') {
  const isEndpointValid = settings.endpoints[endpoint];
  const isSlugValid = settings.menuSlugs[slug];

  if (isEndpointValid === undefined) return console.error('Endpoint does not exist');
  if (endpoint === 'menus' && isSlugValid === undefined) return console.error('Slug does not exist');

  const { baseUrl, menuPath, generalPath, menuSlugs, endpoints } = settings;
  const path = endpoint === 'menus' ? menuPath : generalPath;

  const response = await fetch(`${baseUrl}${path}${endpoints[endpoint]}${slug ? menuSlugs[slug] : ''}`);
  const data = await response.json();

  return data;
}
