import Logo from "@/Components/Logo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="h-screen bg-neutral-800 flex flex-col gap-4 items-center justify-center">
            <Link href="/">
                <Logo classes={"h-24"} />
            </Link>
            <div className="bg-neutral-500/20 min-h-24 p-8 rounded-md">
                {children}
            </div>
        </div>
    );
}
