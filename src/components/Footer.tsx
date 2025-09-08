import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 text-center py-6 text-sm">
            <p>© 2025 Milan Kovacs. All rights reserved.</p>
            <p className="mt-1">
                UI components courtesy of{" "}
                <a
                    href="https://uiverse.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                >
                    Uiverse.io
                </a>{" "}
                and respective authors.
            </p>
        </footer>
    )
}