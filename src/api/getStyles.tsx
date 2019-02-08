import { shuffle } from "lodash";

export function getStyles() {
  return {
    tops: shuffle([
      "RMB33",
      "GA33",
      "SMY22",
      "AN23",
      "SLR51",
      "ALC47",
      "OC92",
      "SLR61",
      "NLS65",
      "MRW47",
      "CS78",
      "NM312",
      "PPL31",
      "UNW3",
      "TNT39",
      "NM344"
    ]),
    bottoms: shuffle([
      "RZ93",
      "DL193",
      "SBL27",
      "TYB32",
      "AX94",
      "HP90",
      "FP78",
      "PBO8",
      "PLL7",
      "DJ24"
    ])
  };
}
