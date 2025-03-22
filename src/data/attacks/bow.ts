import { Attack } from "@/types";

export const BowAttacks = [
  {
    name: "Charged Shot Lv1",
    mv: 9,
    eleMul: 0.2,
    rawMul: 1.1,
    charge: true,
    normalShot: true,
  },
  {
    name: "Charged Shot Lv2",
    mv: 10,
    eleMul: 0.35,
    rawMul: 1.1,
    hits: 2,
    charge: true,
    normalShot: true,
  },
  {
    name: "Charged Shot Lv3",
    mv: 11,
    eleMul: 0.5,
    hits: 3,
    rawMul: 1.1,
    charge: true,
    normalShot: true,
  },
  {
    name: "Quick Shot / Power Shot Lv 1",
    mv: 9,
    eleMul: 0.3,
    hits: 3,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Power Shot Lv2",
    mv: 10,
    eleMul: 0.5,
    hits: 4,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Power Shot Lv3",
    mv: 11,
    eleMul: 0.6,
    hits: 5,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Flying Swallow Shot Lv1",
    mv: 9,
    eleMul: 0.3,
    hits: 3,
    rawMul: 1.1,
    normalShot: true,
  },
  {
    name: "Flying Swallow Shot Lv2",
    mv: 10,
    eleMul: 0.5,
    hits: 4,
    rawMul: 1.1,
    normalShot: true,
  },
  {
    name: "Flying Swallow Shot Lv3",
    mv: 11,
    eleMul: 0.6,
    hits: 5,
    rawMul: 1.1,
    normalShot: true,
  },
  {
    name: "Power Volley Lv1",
    mv: 12,
    eleMul: 0.35,
    hits: 4,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Power Volley Lv2",
    mv: 13,
    eleMul: 0.55,
    hits: 5,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Power Volley Lv3",
    mv: 14,
    eleMul: 0.65,
    hits: 6,
    rawMul: 1.1,
    spreadPowerShot: true,
  },
  {
    name: "Arc Shot Lv1",
    mv: 8,
    eleMul: 0,
    ignoreCoating: true,
  },
  {
    name: "Arc Shot Lv2",
    mv: 9,
    eleMul: 0,
    ignoreCoating: true,
  },
  {
    name: "Arc Shot Lv3",
    mv: 10,
    eleMul: 0,
    ignoreCoating: true,
  },
  {
    name: "Arc Shot Explosion",
    mv: 12,
    eleMul: 0,
    ignoreCoating: true,
  },
  {
    name: "Dragon Piercer",
    mv: 23,
    eleMul: 0.3,
    rawMul: 1.1,
    specialAmmo: true,
    piercingShot: true,
  },
  {
    name: "Dragon Piercer (Fast)",
    mv: 16,
    eleMul: 0.3,
    rawMul: 1.1,
    specialAmmo: true,
    piercingShot: true,
  },
  {
    name: "Thousand Dragons",
    mv: 18,
    eleMul: 0.3,
    hits: 6,
    rawMul: 1.1,
    specialAmmo: true,
  },
  {
    name: "Pierce Charge Shot Lv1",
    mv: 3,
    eleMul: 0.1,
    rawMul: 1.1,
    charge: true,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Charge Shot Lv2",
    mv: 4,
    eleMul: 0.15,
    hits: 2,
    rawMul: 1.1,
    charge: true,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Charge Shot Lv3",
    mv: 5,
    eleMul: 0.2,
    hits: 3,
    rawMul: 1.1,
    charge: true,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Quick Shot / Power Shot Lv1",
    mv: 3,
    eleMul: 0.1,
    hits: 3,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Power Shot Lv2",
    mv: 4,
    eleMul: 0.15,
    hits: 4,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Power Shot Lv3",
    mv: 5,
    eleMul: 0.2,
    hits: 5,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Flying Swallow Shot Lv1",
    mv: 3,
    eleMul: 0.1,
    hits: 3,
    rawMul: 1.1,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Flying Swallow Shot Lv2",
    mv: 4,
    eleMul: 0.15,
    hits: 4,
    rawMul: 1.1,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Flying Swallow Shot Lv3",
    mv: 5,
    eleMul: 0.2,
    hits: 5,
    rawMul: 1.1,
    ignoreCoating: true,
    normalShot: true,
  },
  {
    name: "Pierce Power Volley Lv1",
    mv: 4,
    eleMul: 0.1,
    hits: 4,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Power Volley Lv2",
    mv: 5,
    eleMul: 0.15,
    hits: 5,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Power Volley Lv3",
    mv: 6,
    eleMul: 0.2,
    hits: 6,
    rawMul: 1.1,
    ignoreCoating: true,
    spreadPowerShot: true,
  },
  {
    name: "Pierce Thousand Dragons",
    mv: 11,
    eleMul: 0.3,
    rawMul: 1.1,
    ignoreCoating: true,
    specialAmmo: true,
  },
  {
    name: "Tracer Arrow",
    mv: 25,
    eleMul: 1,
    ignoreCoating: true,
    specialAmmo: true,
  },
  // { name: "Tracer Arrow (Explosion)", mv: 25 },
  {
    name: "Tracer Charged Shot",
    mv: 12,
    eleMul: 0.5,
    hits: 3,
    charge: true,
  },
  {
    name: "Tracer Charged Shot (Miss)",
    mv: 6,
    eleMul: 0.5,
    hits: 3,
  },
  {
    name: "Tracer Quick Shot",
    mv: 12,
    eleMul: 0.6,
    hits: 3,
    spreadPowerShot: true,
  },
  {
    name: "Tracer Power Shot",
    mv: 12,
    eleMul: 0.6,
    hits: 5,
    spreadPowerShot: true,
  },
  {
    name: "Tracer Power Volley",
    mv: 15,
    eleMul: 0.65,
    hits: 6,
    spreadPowerShot: true,
  },
  {
    name: "Tracer Dragon Piercer",
    mv: 27,
    eleMul: 0.3,
    specialAmmo: true,
    piercingShot: true,
  },
  {
    name: "Tracer Dragon Piercer (Fast)",
    mv: 19,
    eleMul: 0.3,
    specialAmmo: true,
    piercingShot: true,
  },
  {
    name: "Tracer Thousand Dragons",
    mv: 21,
    eleMul: 0.3,
    hits: 6,
    specialAmmo: true,
  },
  {
    name: "Tracer Pierce Thousand Dragons",
    mv: 14,
    eleMul: 0.3,
    hits: 6,
    ignoreCoating: true,
    specialAmmo: true,
  },
  {
    name: "Focus Fire: Hailstorm",
    mv: 12,
    eleMul: 0.3,
    ignoreCoating: true,
  },
  {
    name: "Focus Fire: Hailstorm Dragon Piercer",
    mv: 20,
    eleMul: 0.3,
    ignoreCoating: true,
  },
] satisfies Attack[];
