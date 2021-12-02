const settings = {
  baseUrl: "https://signemariemathiasen.dk/kea/4_semester/storyflight/wordpress",
  menuPath: "/wp-json/menus/v1/",
  generalPath: "/wp-json/wp/v2/",
  endpoints: {
    pages: "pages",
    cases: "case",
    customerLogo: "customer_logo",
    services: "services_item",
    chosenCases: "chosen_case",
    menus: "menus",
  },
};

export async function getData(endpoint) {
  const isEndpointValid = settings.endpoints[endpoint];

  if (isEndpointValid === undefined) return console.error("Path does not exist");
  const { baseUrl, menuPath, generalPath } = settings;

  const response = await fetch(`${baseUrl}${endpoint === "menus" ? menuPath : generalPath}${endpoint}`);
  const data = await response.json();

  console.log(data);
  return data;
}
