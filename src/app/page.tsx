"use client";

// import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import {
  AttacksCard,
  BuffsCard,
  EquipmentCard,
  ExportDialogTwo,
  ImportDialogTwo,
  ManualDialog,
  Notice,
  // Notice,
  SkillPointCard,
  StatsCard,
  // Tab,
} from "@/components";
import { SwordAndShields } from "@/data/weapons/SwordAndShields";
import { useBuild } from "@/store/builder";

export default function Builder() {
  const { w, setW } = useBuild();

  // const options = ["Builder", "Manual"] as const;
  // const [view, setView] = useState<(typeof options)[number]>(options[0]);
  // const [comboView, setComboView] = useState(false);

  useEffect(() => {
    if (w.name === "Custom Weapon") setW(SwordAndShields[0]);
  }, [w, setW]);

  return (
    <div className="max-w-9xl mx-auto flex flex-col gap-2">
      <Notice closable>
        The manual damage calculator can be found{" "}
        <Link href="/calc" className="font-bold underline">
          here
        </Link>
        . Damage numbers are averaged when uptime sliders are in use.
      </Notice>
      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-3 justify-end gap-2">
          <ManualDialog />
          <ImportDialogTwo />
          <ExportDialogTwo />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex flex-4 flex-col gap-2">
          {/* <ManualWeaponCard />
          <ManualSkillsCard /> */}
          <EquipmentCard />
          <BuffsCard />
        </div>
        <div className="flex flex-2 flex-col gap-2">
          <StatsCard />
          <SkillPointCard />
          {/* <Card>
            <h1>Debug</h1>
            <h1>Total Weight: {totalWeight}</h1>
            <textarea
              className="font-mono text-xs"
              value={JSON.stringify(weights, undefined, 2)}
              rows={60}
              readOnly
            />
            <textarea
              className="font-mono text-xs"
              value={JSON.stringify(head, undefined, 2)}
              rows={60}
              readOnly
            />
          </Card> */}
        </div>
        <div className="flex-3">
          <AttacksCard />
        </div>
      </div>
    </div>
  );
}
