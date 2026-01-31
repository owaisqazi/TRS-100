"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./auth/auth-modal";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "@/redux/authSlice";
import toast from "react-hot-toast";
import ProfileDrawer from "./(profile)/profile-drawer";
import { usePathname, useRouter } from "next/navigation";
import HeaderDrawer from "./(profile)/header-drawer";
import { Circle, HardHat, Home, User, Users2 } from "lucide-react";

const links = [
    { href: '/', label: 'HOME', icon: Home },
    { href: '/about', label: 'ABOUT US', icon: Circle },
    { href: '/consultant-lounge', label: 'CONSULTANT LOUNGE', icon: User },
    { href: '/builder-lounge', label: 'BUILDER LOUNGE', icon: HardHat },
    { href: '/property', label: 'CUSTOMER', icon: Users2 },
];


function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handlerLogout = () => {
        dispatch(clearAuth());
        toast.success("Successfully logout");
        router.push('/');
    }

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full property-gradient bg-black/20 backdrop-blur-sm transition-all duration-300">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center md:ps-16">
                        {/* Logo size thoda optimize kiya slider par acha dikhne ke liye */}
                        <Image src="/assets/logo/logo.png" alt="Logo" width={100} height={50} className="object-contain" />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-16">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-white text-sm font-bold pb-1 border-b-2 transition duration-300 uppercase ${pathname === href
                                    ? 'border-white'
                                    : 'border-transparent hover:border-gray-300'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                        {token ? (
                            <>
                                <ProfileDrawer onLogout={handlerLogout} user={user} />
                            </>
                        ) : (
                            <button
                                onClick={() => setOpen(true)}
                                className="bg-white text-black px-6 py-1.5 rounded text-sm font-medium cursor-pointer"
                            >
                                LOG IN
                            </button>
                        )}
                    </nav>
                    {/* Mobile Drawer */}
                    <div className="md:hidden block">
                        <HeaderDrawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} links={links} />
                    </div>
                </div>
            </header>
            <AuthModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default Header

