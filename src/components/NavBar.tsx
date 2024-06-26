import { ModeToggle } from '@/components/ModeToggle';

const NavBar = () => {
    return (
        <header className="absolute top-0 left-0 z-50 w-full bg-opacity-30 backdrop-blur-lg">
            <nav className=" py-6">
                <div className="container mx-auto px-4 py-2">
                <nav className="flex justify-between items-center">
                <a href="/PictureCompressor/" className="text-2xl font-bold items-center">
                    <span className="block sm:hidden">SSqueeze</span>
                    <span className="hidden sm:block">SnapSqueeze</span>
                </a>
                    <ul className="flex space-x-4 justify-center items-center">
                        <li><a href="/PictureCompressor/compressor" className=" text-lg">Compressor</a></li>
                        <li><ModeToggle /></li>
                    </ul>
                </nav>
                </div>
            </nav>
        </header>
    )
}

export default NavBar