import {Sun, Moon} from 'lucide-react';
import { useTheme } from './components/ThemeContext';

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        < div className="fixed top-4 right-4 z-50">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
        </div>
    );
}