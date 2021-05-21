export interface AudioplayerPlugin {
  start(options: { value: string }): Promise<{ value: string }>;
  pause(options: { value: string }): Promise<{ value: string }>;
  stop(options: { value: string }): Promise<{ value: string }>;
  echo(options: { value: string }): Promise<{ value: string }>;
}
