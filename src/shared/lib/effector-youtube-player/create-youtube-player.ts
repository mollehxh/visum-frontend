import { attach, createEffect, createEvent, createStore } from 'effector';
import { YouTubePlayer } from 'youtube-player/dist/types';
import createYoutubePlayer from 'youtube-player';

export const createYouTubePlayer = () => {
  const $videoPlayer = createStore<YouTubePlayer | null>(null);

  const bindElementFx = createEffect((element: HTMLElement) => {
    return createYoutubePlayer(element);
  });

  $videoPlayer.on(bindElementFx.doneData, (_, player) => player);

  const stopped = createEvent();
  const played = createEvent();

  $videoPlayer.watch((player) => {
    if (!player) return;
    player.on('stateChange', (event) => {
      if (event.data === 2) stopped();
    });
    player.on('stateChange', (event) => {
      if (event.data === 1) played();
    });
  });

  const loadVideoByIdFx = attach({
    source: $videoPlayer,
    effect: (videoPlayer, videoId: string) => {
      if (!videoPlayer) throw new Error('Video player is not initialized');

      videoPlayer.loadVideoById(videoId);
    },
  });

  const playVideoFx = attach({
    source: $videoPlayer,
    effect: (videoPlayer) => {
      if (!videoPlayer) throw new Error('Video player is not initialized');

      videoPlayer.playVideo();
    },
  });

  const stopVideoFx = attach({
    source: $videoPlayer,
    effect: (videoPlayer) => {
      if (!videoPlayer) throw new Error('Video player is not initialized');

      videoPlayer.pauseVideo();
    },
  });

  const seekToFx = attach({
    source: $videoPlayer,
    effect: (videoPlayer, seconds: number) => {
      if (!videoPlayer) throw new Error('Video player is not initialized');

      videoPlayer.seekTo(seconds, true);
    },
  });

  return {
    bindElement: bindElementFx,
    loadVideoById: loadVideoByIdFx,
    playVideo: playVideoFx,
    stopVideo: stopVideoFx,
    seekTo: seekToFx,
    played,
    stopped,
  };
};

export type YouTubePlayerModel = ReturnType<typeof createYouTubePlayer>;
