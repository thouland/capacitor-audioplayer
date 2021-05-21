export interface AudioplayerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
