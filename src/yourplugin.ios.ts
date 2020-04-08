import { Common } from './yourplugin.common';

declare var CypherNS: any;
declare var MDCSnackbarMessage: any;
declare var MDCSnackbarManager: any;

export class Yourplugin extends Common {

  public static cypher(text: string, key: string): string {
    return CypherNS.encryptWithTextKey(text, key);
  }

  public static showSnackbar(text: string): void {
    let snackBarMessage = MDCSnackbarMessage.alloc().init()
    snackBarMessage.text = text;
    MDCSnackbarManager.showMessage(snackBarMessage);
  }

}
