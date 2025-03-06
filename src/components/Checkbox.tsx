import React from "react";

type Props = {
  value?: boolean;
  onChangeValue: (v: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export default function Checkbox({
  value,
  onChangeValue,
  label,
  disabled,
}: Props) {
  return (
    <div
      className="my-2 flex cursor-pointer text-xs text-zinc-700 select-none"
      onClick={() => onChangeValue(!value)}
    >
      <input
        type="checkbox"
        checked={value}
        className="cursor-pointer"
        onChange={(e) => onChangeValue(e.target.checked)}
        disabled={disabled}
      />
      {label && (
        <label className="mb-0 ml-1 flex cursor-pointer place-items-center">
          {label}
        </label>
      )}
    </div>
  );
}
