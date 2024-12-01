'use client'
 
import useCartService from '@/lib/hooks/useCartStore';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
const Menu = () => {
    const { items } = useCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div>
            <ul className="flex items-stretch">
                <li>
                    <Link className="flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium hover:bg-green-500 hover:text-white transition" href="/cart">
                        <FaShoppingCart className="text-xl" />
                        Cart
                        {mounted && items.length != 0 && (
                            <div className="badge badge-secondary">
                                {items.reduce((a, c) => a + c.qty, 0)}{' '}
                            </div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/signin"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium hover:bg-green-500 hover:text-white transition"
                    >
                        <FaSignInAlt className="text-xl" />
                        Sign In
                    </Link>
                </li>
            </ul>
        </div>
    )
}
 


export default Menu