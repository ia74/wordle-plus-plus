import { getFElement, ModGlobal } from "./ModGlobal";

export default function () {
  if(getFElement(ModGlobal.WelcomeScreen)) {
		const PlayButton: HTMLButtonElement = getFElement(ModGlobal.PlayButton) as HTMLButtonElement;
		PlayButton.click();
	}
}