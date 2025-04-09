import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'block px-3 py-2 rounded transition-colors',
        isActive
          ? 'bg-gray-100 text-blue-600 font-medium'
          : 'text-gray-700 hover:bg-gray-50'
      )}
    >
      {children}
    </Link>
  )
}
