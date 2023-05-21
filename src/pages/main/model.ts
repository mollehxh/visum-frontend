import { createEvent, createStore, createEffect, sample } from 'effector';
import { chainAuthorized } from '~/entities/session/model';
import { createRoom } from '~/shared/api/shared-api';
import { routes } from '~/shared/routing';

export const currentRoute = routes.main;
export const authorizedRoute = chainAuthorized(currentRoute, {
  otherwise: routes.signIn.open,
});

export const videoUrlChanged = createEvent<string>();
export const submitUrl = createEvent();

export const $videoUrl = createStore('');

export const createRoomFx = createEffect(createRoom);

$videoUrl.on(videoUrlChanged, (_, url) => url);

sample({
  clock: submitUrl,
  source: $videoUrl,
  filter: (videoUrl) => stringNotEmpty(videoUrl) && urlHasVideoId(videoUrl),
  fn: (videoUrl) => extractVideoId(videoUrl),
  target: createRoomFx,
});

sample({
  clock: createRoomFx.doneData,
  fn: (data) => ({ roomId: String(data.roomId) }),
  target: routes.room.open,
});

function stringNotEmpty(string: string) {
  return Boolean(string.trim());
}

function urlHasVideoId(url: string) {
  return Boolean(extractVideoId(url));
}

function extractVideoId(url: string) {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|)([\w-]{11})(?:\S+)?$/;
  const match = url.match(regex);
  if (!match) return '';
  return match[1];
}
