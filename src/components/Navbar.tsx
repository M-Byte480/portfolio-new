
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full shadow-md z-50">
            <ul className="flex justify-center gap-8 p-4">
                <li>
                    <a href="#about" className="hover:text-blue-500">About</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-blue-500">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </li>
            </ul>
        </nav>
    );
}