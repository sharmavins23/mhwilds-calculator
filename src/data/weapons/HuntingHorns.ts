import { type HuntingHorn } from "@/types";

export const HuntingHorns: HuntingHorn[] = [
  {
    type: "Hunting Horn",
    name: "Esperanza Horn",
    rarity: 8,
    attack: 210,
    affinity: 0,
    sharpness: [50, 60, 70, 60, 40, 70, 0],
    handicraft: [50, 0, 0, 0],
    slots: [3, 2, 1],
    skills: {
      "Critical Eye": 2,
      "Speed Sharpening": 2,
    },
    songs: [
      "Attack Up (S)",
      "Fire Res(L)",
      "Sonic Waves",
      "Echo Wave (Blunt)",
      "Offset Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "G. Rathalos Tree Feroce",
    rarity: 8,
    attack: 200,
    affinity: 15,
    element: { type: "Fire", value: 300 },
    slots: [3, 2, 1],
    sharpness: [50, 150, 50, 40, 40, 20, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Master's Touch": 1, "Critical Element": 1 },
    songs: [
      "Attack Up (L)",
      "Defense Up (L)",
      "Wind Pressure Negated",
      "Sonic Barrier",
      "Echo Wave (Blunt)",
      "Resounding Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Great Bagpipe",
    rarity: 8,
    attack: 210,
    affinity: 0,
    slots: [3, 2, 1],
    sharpness: [40, 60, 90, 70, 50, 40, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Critical Draw": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Attack Up (L)",
      "Earplugs (S)",
      "Aquatic/Oilsilt Mobility",
      "Envir. Damage Negated",
      "Echo Wave (Slash)",
      "Offset Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "0AAF15CB-CD26-4693-8C85-E4583BB7BA51",
  //   rarity: 7,
  //   attack: 190,
  //   affinity: 0,
  //   element: { type: "Ice", value: 470 },
  //   slots: [3, 2, 0],
  //   sharpness: [40, 40, 50, 100, 110, 10, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { Slugger: 3 },
  // },
  {
    type: "Hunting Horn",
    name: "Precipice Kovira",
    rarity: 8,
    attack: 210,
    affinity: 0,
    element: { type: "Ice", value: 500 },
    slots: [3, 2, 1],
    sharpness: [40, 40, 40, 80, 120, 30, 0],
    handicraft: [50, 0, 0, 0],
    skills: { Slugger: 3 },
    songs: [
      "Health Recovery (S)",
      "Recovery Speed (S)",
      "Elem Attack Boost",
      "Divine Protection",
      "Thunder Res (L)",
      "Sonic Waves",
      "Echo Wave (Ice)",
      "Offset Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Ajara-Jivaka",
    rarity: 8,
    attack: 210,
    affinity: 10,
    status: { type: "Blast", value: 250 },
    slots: [3, 2, 1],
    sharpness: [50, 80, 50, 90, 40, 40, 0],
    handicraft: [50, 0, 0, 0],
    skills: { Slugger: 3 },
    songs: [
      "Attack Up (L)",
      "Earplugs (S)",
      "Aquatic/Oilsilt Mobility",
      "Envir. Damage Negated",
      "Echo Wave (Blast)",
      "Offset Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Kae-Jin's Lament",
    rarity: 8,
    attack: 220,
    affinity: 0,
    element: { type: "Water", value: 250 },
    slots: [3, 2, 1],
    sharpness: [20, 110, 50, 50, 60, 60, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Stamina Thief": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Health Recovery (S)",
      "Health Rec. (M) + Antidote",
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "Wind Pressure Negated",
      "Echo Wave (Blunt)",
      "Melody of Life",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "64FB0F7D-70DB-48A0-BB21-2FDE18B6C134",
  //   rarity: 7,
  //   attack: 190,
  //   affinity: 10,
  //   element: { type: "Water", value: 270 },
  //   slots: [3, 2, 0],
  //   sharpness: [40, 30, 110, 90, 70, 10, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { Slugger: 3 },
  // },
  // {
  //   type: "Hunting Horn",
  //   name: "64FB0F7D-70DB-48A0-BB21-2FDE18B6C134",
  //   rarity: 7,
  //   attack: 190,
  //   affinity: 10,
  //   element: { type: "Water", value: 270 },
  //   slots: [3, 2, 0],
  //   sharpness: [40, 30, 110, 90, 70, 10, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { Slugger: 3 },
  // },
  {
    type: "Hunting Horn",
    name: "Sandsea Ghantisil",
    rarity: 8,
    attack: 210,
    affinity: 10,
    element: { type: "Water", value: 300 },
    slots: [3, 2, 1],
    sharpness: [40, 30, 100, 90, 70, 20, 0],
    handicraft: [50, 0, 0, 0],
    skills: { Slugger: 3 },
    songs: [
      "Health Recovery (S)",
      "Recovery Speed (S)",
      "Elem Attack Boost",
      "Divine Protection",
      "Thunder Res (L)",
      "Sonic Waves",
      "Echo Wave (Water)",
      "Offset Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "5C624B95-0774-4B6A-8FDC-4171EB632EF4",
  //   rarity: 7,
  //   attack: 200,
  //   affinity: 0,
  //   element: { type: "Thunder", value: 270 },
  //   slots: [3, 2, 0],
  //   sharpness: [10, 10, 130, 80, 80, 40, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { "Stamina Thief": 3, "Horn": 1 },
  // },
  {
    type: "Hunting Horn",
    name: "Perun Clairhorn",
    rarity: 8,
    attack: 220,
    affinity: 0,
    element: { type: "Thunder", value: 300 },
    slots: [3, 2, 1],
    sharpness: [10, 10, 120, 70, 70, 70, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Stamina Thief": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Attack Up (S)",
      "Fire Res(L)",
      "Sonic Waves",
      "Echo Wave (Thunder)",
      "Offset Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "974771F0-0FA8-466A-B023-EECED5D0A159",
  //   rarity: 7,
  //   attack: 180,
  //   affinity: 0,
  //   status: { type: "Paralysis", value: 370 },
  //   slots: [3, 2, 0],
  //   sharpness: [50, 70, 90, 90, 50, 0, 0],
  //   handicraft: [30, 20, 0, 0],
  //   skills: { "Protective Polish": 3, "Speed Sharpening": 1 },
  // },
  {
    type: "Hunting Horn",
    name: "Glass Royale",
    rarity: 8,
    attack: 200,
    affinity: 0,
    status: { type: "Paralysis", value: 400 },
    slots: [3, 2, 1],
    sharpness: [50, 50, 80, 80, 90, 0, 0],
    handicraft: [0, 50, 0, 0],
    skills: { "Protective Polish": 3, "Speed Sharpening": 2 },
    songs: [
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "Ice Res (L)",
      "All Wind Pressure Negated",
      "Sonic Waves",
      "Echo Wave (Paralysis)",
      "Resounding Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Hardened Bone Horn",
    rarity: 8,
    attack: 220,
    affinity: 0,
    slots: [3, 2, 1],
    sharpness: [50, 70, 70, 70, 90, 0, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Stamina Thief": 3, "Attack Boost": 1 },
    songs: [
      "Attack Up (L)",
      "Defense Up (L)",
      "Wind Pressure Negated",
      "Sonic Barrier",
      "Echo Wave (Blunt)",
      "Resounding Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Farsounder Honga",
    rarity: 8,
    attack: 240,
    affinity: -5,
    slots: [3, 2, 1],
    sharpness: [50, 100, 120, 50, 30, 0, 0],
    handicraft: [0, 50, 0, 0],
    skills: { Slugger: 2, ["Horn Maestro"]: 1 },
    songs: [
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "Stun Negated",
      "Wind Pressure Negated",
      "Sonic Barrier",
      "Echo Wave (Blunt)",
      "Offset Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "G. Resounding Galahad",
    rarity: 8,
    attack: 230,
    affinity: -10,
    element: { type: "Dragon", value: 250 },
    slots: [3, 3, 1],
    sharpness: [100, 80, 50, 80, 40, 0, 0],
    handicraft: [10, 40, 0, 0],
    skills: { ["Horn Maestro"]: 2 },
    songs: [
      "Attack Up (L)",
      "Defense Up (L)",
      "Wind Pressure Negated",
      "Sonic Barrier",
      "Echo Wave (Slash)",
      "Resounding Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "9C3F5DB8-A976-47F1-A840-1BCC874D4C3A",
  //   rarity: 7,
  //   attack: 190,
  //   affinity: 0,
  //   element: { type: "Dragon", value: 370 },
  //   slots: [3, 2, 0],
  //   sharpness: [50, 50, 50, 80, 100, 20, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { Slugger: 2, ["Horn Maestro"]: 2 },
  // },
  // {
  //   type: "Hunting Horn",
  //   name: "9C3F5DB8-A976-47F1-A840-1BCC874D4C3A",
  //   rarity: 7,
  //   attack: 190,
  //   affinity: 0,
  //   element: { type: "Dragon", value: 370 },
  //   slots: [3, 2, 0],
  //   sharpness: [50, 50, 50, 80, 100, 20, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { Slugger: 2, "Horn": 2 },
  // },
  {
    type: "Hunting Horn",
    name: "Resounding Galahad",
    rarity: 8,
    attack: 210,
    affinity: 0,
    element: { type: "Dragon", value: 400 },
    slots: [3, 2, 1],
    sharpness: [50, 50, 50, 70, 90, 40, 0],
    handicraft: [50, 0, 0, 0],
    skills: { Slugger: 2, ["Horn Maestro"]: 2 },
    songs: [
      "Attack Up (L)",
      "Knockback Negated",
      "Extend All Melodies",
      "Restore Sharpness",
      "Echo Wave (Dragon)",
      "Resounding Melody",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Grudgesounder Urga",
    rarity: 8,
    attack: 250,
    affinity: -15,
    slots: [3, 2, 1],
    sharpness: [60, 80, 100, 70, 40, 0, 0],
    handicraft: [10, 40, 0, 0],
    skills: { "Stamina Thief": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Health Recovery (S)",
      "Health Recovery (L)",
      "Earplugs (L)",
      "Echo Wave (Blunt)",
      "Melody of Life",
    ],
  },
  {
    type: "Hunting Horn",
    name: "War Conga",
    rarity: 8,
    attack: 210,
    affinity: 5,
    slots: [3, 3, 1],
    sharpness: [60, 90, 60, 60, 50, 30, 0],
    handicraft: [50, 0, 0, 0],
    skills: { ["Horn Maestro"]: 2, "Speed Sharpening": 1 },
    songs: [
      "Health Recovery (S)",
      "Health Rec. (M) + Antidote",
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "Wind Pressure Negated",
      "Echo Wave (Blunt)",
      "Melody of Life",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "EFBD6CFC-BB41-4157-9BE2-DADD06FD94FF",
  //   rarity: 7,
  //   attack: 220,
  //   affinity: 0,
  //   element: { type: "Fire", value: 470 },
  //   slots: [3, 2, 0],
  //   sharpness: [100, 120, 40, 70, 20, 0, 0],
  //   handicraft: [20, 30, 0, 0],
  //   skills: { "Stamina Thief": 3, ["Horn Maestro"]: 1 },
  // },
  // {
  //   type: "Hunting Horn",
  //   name: "EFBD6CFC-BB41-4157-9BE2-DADD06FD94FF",
  //   rarity: 7,
  //   attack: 220,
  //   affinity: 0,
  //   element: { type: "Fire", value: 470 },
  //   slots: [3, 2, 0],
  //   sharpness: [100, 120, 40, 70, 20, 0, 0],
  //   handicraft: [20, 30, 0, 0],
  //   skills: { "Stamina Thief": 3, "Horn": 1 },
  // },
  {
    type: "Hunting Horn",
    name: "Kut-Ku Cantabile",
    rarity: 8,
    attack: 230,
    affinity: 0,
    element: { type: "Fire", value: 500 },
    slots: [3, 2, 1],
    sharpness: [110, 120, 30, 60, 30, 0, 0],
    handicraft: [0, 50, 0, 0],
    skills: { "Stamina Thief": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Elem Attack Boost",
      "Water Res (L)",
      "Dragon Res (L)",
      "Tremors Negated",
      "Paralysis Negated",
      "Sonic Waves",
      "Melody of Life",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Fulgurhowl Guardiana",
    rarity: 8,
    attack: 210,
    affinity: 15,
    element: { type: "Thunder", value: 400 },
    slots: [3, 2, 1],
    sharpness: [40, 90, 120, 60, 40, 0, 0],
    handicraft: [0, 50, 0, 0],
    skills: { "Critical Element": 3 },
    songs: [
      "Elem Attack Boost",
      "Water Res (L)",
      "Dragon Res (L)",
      "Tremors Negated",
      "Paralysis Negated",
      "Sonic Waves",
      "Melody of Life",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Crazed Melody",
    rarity: 8,
    attack: 230,
    affinity: 0,
    status: { type: "Poison", value: 400 },
    slots: [3, 2, 1],
    sharpness: [90, 50, 110, 60, 40, 0, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Critical Draw": 3, ["Horn Maestro"]: 1 },
    songs: [
      "Status Attack Up",
      "Divine Protection",
      "All Ailments Negated",
      "Echo Wave (Poison)",
      "Offset Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "54E0F8B7-0852-40E5-9662-637A28725BC6",
  //   rarity: 7,
  //   attack: 180,
  //   affinity: 15,
  //   status: { type: "Poison", value: 220 },
  //   slots: [3, 2, 0],
  //   sharpness: [40, 80, 40, 120, 40, 30, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { "Critical Status": 3, "Poison Duration Up": 1 },
  // },
  {
    type: "Hunting Horn",
    name: "Queen Chordmaker",
    rarity: 8,
    attack: 200,
    affinity: 15,
    status: { type: "Poison", value: 250 },
    slots: [3, 2, 1],
    sharpness: [40, 80, 30, 120, 30, 50, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Critical Status": 3, "Poison Duration Up": 1 },
    songs: [
      "Attack Up (L)",
      "Health Recovery (S)",
      "Recovery Speed (L)",
      "Echo Wave (Blunt)",
      "Melody of Life",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Rathalos Feroce",
    rarity: 8,
    attack: 200,
    affinity: 10,
    element: { type: "Fire", value: 400 },
    slots: [3, 2, 1],
    sharpness: [100, 70, 50, 40, 60, 30, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Critical Boost": 3 },
    songs: [
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "All Wind Pressure Negated",
      "Attack/Defense Up (S)",
      "Echo Wave (Fire)",
      "Offset Melody",
    ],
  },
  // {
  //   type: "Hunting Horn",
  //   name: "B0E8FE67-1D49-4D5E-9364-7862C7310B72",
  //   rarity: 7,
  //   attack: 170,
  //   affinity: 20,
  //   element: { type: "Dragon", value: 270 },
  //   slots: [3, 2, 0],
  //   sharpness: [50, 70, 80, 70, 50, 30, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { "Critical Element": 3 },
  // },
  // {
  //   type: "Hunting Horn",
  //   name: "B0E8FE67-1D49-4D5E-9364-7862C7310B72",
  //   rarity: 7,
  //   attack: 170,
  //   affinity: 20,
  //   element: { type: "Dragon", value: 270 },
  //   slots: [3, 2, 0],
  //   sharpness: [50, 70, 80, 70, 50, 30, 0],
  //   handicraft: [50, 0, 0, 0],
  //   skills: { "Critical Element": 3 },
  // },
  {
    type: "Hunting Horn",
    name: "Gramklang",
    rarity: 8,
    attack: 200,
    affinity: 20,
    element: { type: "Dragon", value: 300 },
    slots: [3, 2, 1],
    sharpness: [50, 50, 80, 60, 50, 60, 0],
    handicraft: [50, 0, 0, 0],
    skills: { "Critical Element": 3 },
    songs: [
      "Health Recovery (S)",
      "Earplugs (L)",
      "Affinity Up/Health Recovery",
      "Echo Wave (Blunt)",
      "Melody of Life",
    ],
  },
  {
    type: "Hunting Horn",
    name: "Omiltika",
    rarity: 8,
    attack: 190,
    affinity: 5,
    slots: [3, 3, 3],
    artian: { element: 350, status: 150 },
    sharpness: [80, 40, 60, 80, 70, 20, 0],
    handicraft: [50, 0, 0, 0],
    skills: {},
    songs: [
      "Stamina Use Reduced (L)",
      "Defense Up (L)",
      "All Wind Pressure Negated",
      "Attack/Defense Up (S)",
      "Echo Wave (Slash)",
      "Offset Melody",
    ],
  },
];
