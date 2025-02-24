// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const pathname = usePathname();

//   // Hide the navbar on the login page
//   if (pathname === '/login') return null;

//   return (
//     <nav className="bg-gray-800 text-white px-6 py-5 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
//       <div className="flex space-x-6">
//         <Link href="/" className="hover:text-gray-300">
//           Home
//         </Link>
//         <Link href="/page2" className="hover:text-gray-300">
//           Page2
//         </Link>
//         <Link href="/counter" className="hover:text-gray-300">
//           Counter
//         </Link>
//       </div>

//       <div>
//         <Link href="/signup" className="hover:text-gray-300">
//           Signup
//         </Link>
//       </div>
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from './UserContext';

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useUser();

  // Hide the navbar on the login page
  if (pathname === '/login') return null;

  return (
    <nav className="bg-gray-800 text-white px-6 py-5 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/page2" className="hover:text-gray-300">
          Page2
        </Link>
        <Link href="/counter" className="hover:text-gray-300">
          Counter
        </Link>
      </div>

      <div>
        {user ? (
          <span className="mr-4 font-semibold">{user.name}</span>
        ) : (
          <Link href="/signup" className="hover:text-gray-300">
            Signup
          </Link>
        )}
      </div>
    </nav>
  );
}
