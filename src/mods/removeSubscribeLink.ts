import { getFElement, ModGlobal } from "./ModGlobal";

export default function () {
  getFElement(ModGlobal.SubLink).remove();
}