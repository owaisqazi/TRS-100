"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "@/redux/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProfileDrawer from "@/components/(profile)/profile-drawer";
import AuthModal from "@/components/auth/auth-modal";

function SubHeader() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false);

    const handlerLogout = () => {
        dispatch(clearAuth());
        toast.success("Successfully logout");
        router.push('/');
    }

    return (
        <>
            <header className="w-full flex justify-end items-center p-4 bg-[#1a1333]">
                {token ? (
                    <>
                        <ProfileDrawer onLogout={handlerLogout} user={user} />
                    </>
                ) : (
                    <button
                        onClick={() => {
                            window.open("https://trs-100-one.vercel.app", "_blank");
                        }}
                        className="bg-white text-black px-6 py-1.5 rounded text-sm font-medium"
                    >
                        LOG IN
                    </button>

                )}
            </header>
            <AuthModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default SubHeader

