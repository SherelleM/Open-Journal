import { FC } from "react";
import type { PersonaplexConnectionStatus } from "../hooks/usePersonaplexSession";

type ConnectButtonProps = {
  status: PersonaplexConnectionStatus;
  onConnect: () => void;
  onDisconnect: () => void;
  disabled?: boolean;
  className?: string;
};

export const ConnectButton: FC<ConnectButtonProps> = ({
  status,
  onConnect,
  onDisconnect,
  disabled = false,
  className = "",
}) => {
  const isConnected = status === "connected";

  return (
    <button
      type="button"
      onClick={isConnected ? onDisconnect : onConnect}
      disabled={disabled || status === "connecting"}
      className={`
        inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
        ${
          isConnected
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50"
            : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/50"
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
        />
      </svg>
      {status === "connecting"
        ? "Starting..."
        : isConnected
          ? "End journal session"
          : "Start session"}
    </button>
  );
};
