import { registerPlugin } from '@capacitor/core';

import type { AudioplayerPlugin } from './definitions';

const Audioplayer = registerPlugin<AudioplayerPlugin>('Audioplayer', {
  web: () => import('./web').then(m => new m.AudioplayerWeb()),
});

export * from './definitions';
export { Audioplayer };
