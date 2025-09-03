import { useRegisterSW } from "virtual:pwa-register/react";

export default function ReloadPrompt() {
  const { needRefresh, updateServiceWorker } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className=" bg-yellow-400 text-black p-3 rounded-lg shadow-lg">
      🔄 New update available!
      <button
        className="ml-2 px-3 py-1 bg-black text-white rounded cursor-pointer"
        onClick={() => updateServiceWorker(true)} // 👈 important
      >
        Refresh
      </button>
    </div>
  );
}
