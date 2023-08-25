const mapping: Record<string, string> = {
  favorites: 'favorite',
  platforms: 'platform',
  stories: 'story',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
