import "./styles.css";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ScrollButton from "./ScrollButton";

export default function App() {
  return (
    <Tabs>
      <ScrollButton>
        <span role="img" aria-label="arrow left">
          ⬅
        </span>
      </ScrollButton>
      <div aria-label="scrollable auto tabs" role="tablist" className="tablist">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
      </div>
      <ScrollButton>
        <span role="img" aria-label="arrow right">
          ➡️
        </span>
      </ScrollButton>
    </Tabs>
  );
}
