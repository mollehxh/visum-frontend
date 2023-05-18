import { chainAnonymous } from '~/entities/session/model';
import { routes } from '~/shared/routing';

export const currentRoute = routes.signUp;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.main.open,
});
