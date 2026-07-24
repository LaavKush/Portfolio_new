// // app/client-layout.jsx
// 'use client';

// import Navbar from "@/app/components/Navbar";

// export default function ClientLayout({ children }) {
//   return (
//     <>
//       <Navbar />
//       {children}
//     </>
//   );
// }

'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";

function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Trigger brief loader effect on path/route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // Smooth 400ms transition delay

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a]/90 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/loader.gif"
          alt="Loading..."
          width={120}
          height={120}
          priority
          className="w-28 h-28 object-contain"
        />
        <p className="text-cyan-400 font-medium text-sm tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
}

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <NavigationLoader />
      </Suspense>
      {children}
    </>
  );
}