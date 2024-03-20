import { createRoot } from "react-dom/client";
import "./index.scss";
import MainView from "../components/MainView/main-view";

const DonkeyArchiveApplication = () => {
  return (
    <div className="donkey-archive">
      <h1>Donkey Archive</h1>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MainView />);
