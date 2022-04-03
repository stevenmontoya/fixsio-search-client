import { atom } from "recoil";

export const coordsAtom = atom({
  key: "coordsAtom",
  default: { lat: null, lng: null },
});
