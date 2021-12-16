export const SETTINGS = {
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
  parameters: {
    // add all slugs
    primaryMenu: '/primary-menu',
    contactInformation: '/contact-information',
    forside: '/2',
    kontakt: '/111',
    cases: '/109',
    viTilbyder: '/107',
  },
};

export async function getData(endpoint, slug = '') {
  const isEndpointValid = SETTINGS.endpoints[endpoint];
  const isSlugValid = SETTINGS.parameters[slug];

  if (isEndpointValid === undefined) return console.error('Endpoint does not exist');
  if (endpoint === 'menus' && isSlugValid === undefined) return;

  const { baseUrl, menuPath, generalPath, parameters, endpoints } = SETTINGS;
  const path = endpoint === 'menus' ? menuPath : generalPath;

  const response = await fetch(`${baseUrl}${path}${endpoints[endpoint]}${slug ? parameters[slug] : ''}`);
  const data = await response.json();

  return data;
}
