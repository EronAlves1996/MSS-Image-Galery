import { PropsWithChildren } from "react";

export default function SubmitButton({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <button
      type="submit"
      className={`border-gray-500 border-solid border-2 bg-slate-200 rounded-md p-1 hover:bg-slate-500 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
}
