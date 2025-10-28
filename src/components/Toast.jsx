// src/components/Toast.jsx
export default function Toast({ show, text }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="rounded-lg px-4 py-2 shadow-lg bg-slate-900/90 text-white text-sm animate-fade-in">
        {text}
      </div>
    </div>
  );
}
