import { chainAuthorized } from '~/entities/session/model';
import { routes } from '~/shared/routing';

export const currentRoute = routes.main;
export const authorizedRoute = chainAuthorized(currentRoute, {
  otherwise: routes.signIn.open,
});
