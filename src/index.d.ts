import { Common } from './yourplugin.common';
export declare class Yourplugin extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here

  public static cypher(text: string, key: string): string;
  public static showSnackbar(text: string): void;
}
