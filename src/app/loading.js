import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/loader.gif"
          alt="Loading..."
          width={120}
          height={120}
          priority
          className="w-24 h-24 object-contain"
        />
        <p className="text-cyan-400 font-medium text-sm tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
}