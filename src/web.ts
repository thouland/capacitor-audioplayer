import { WebPlugin } from '@capacitor/core';

import type { AudioplayerPlugin } from './definitions';

export class AudioplayerWeb extends WebPlugin implements AudioplayerPlugin {
  async start(options: { value: string }): Promise<{ value: string }> {
    console.log('start', options);
    return options;
  }
  async pause(options: { value: string }): Promise<{ value: string }> {
    console.log('pause', options);
    return options;
  }

  async stop(options: { value: string }): Promise<{ value: string }> {
    console.log('stop', options);
    return options;
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
