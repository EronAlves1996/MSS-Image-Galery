import { HTMLInputTypeAttribute } from "react";

export type FormConfiguration = {
  id: string;
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  name: string;
};

export default function FormInputField(config: FormConfiguration) {
  const { id, label } = config;

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className="border-gray-500 border-solid border-2 rounded-md bg-white"
        {...{ config, label: "" }}
      />
    </div>
  );
}
