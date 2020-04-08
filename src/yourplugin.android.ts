import { Common } from './yourplugin.common';
import { Frame } from "tns-core-modules/ui/frame";

declare var com: any;
declare var global: any;

const SnackbarPackage = useAndroidX()
  ? com.google.android.material.snackbar
  : (android.support as any).design.widget;

function useAndroidX() {
  return (
    global.androidx &&
    com.google &&
    com.google.android &&
    com.google.android.material
  );
}

export class Yourplugin extends Common {
  public static cypher(text: string, key: string): string {
    return com.salvador.myapplication.CypherNS.encryptText(text, key);
  }

  public static showSnackbar(text: string): void {
    SnackbarPackage.Snackbar.make(Frame.topmost().currentPage.android, text, 3000).show();
  }
}
