import { WebPlugin } from '@capacitor/core';

import type { AudioplayerPlugin } from './definitions';

export class AudioplayerWeb extends WebPlugin implements AudioplayerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
