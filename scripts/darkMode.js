import { body } from "./elements.js";

export default function DarkMode() {
    function activeDark() {
        body.classList.add('dark');
    };
    function activeLigth() {
        body.classList.remove('dark');
    }
    
    return {
        activeDark,
        activeLigth,
    }
}





