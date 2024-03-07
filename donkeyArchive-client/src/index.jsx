import { createRoot } from 'react-dom/client';
import "./index.scss";

const donkeyArchiveApplication = () => {
    return (
        <div className="The Donkey Archive">
       
            <div>Where all the donkeys are archived! </div>
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<donkeyArchiveApplication />);