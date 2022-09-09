import Dropdown from "./Dropdown";
import "./App.css";

export default function App() {
  const colors = [
    { value: "None", label: "None" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];

  const ages = [
    { value: "None", label: "None" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" }
  ];

  return (
    <div className="App">
      <div className="Dropdown">
        <Dropdown
          title="Colors"
          isMulti={true}
          placeHolder="Select..."
          options={colors}
        />
      </div>
      <div className="Dropdown">
        <Dropdown
          title="Ages"
          isMulti={false}
          placeHolder="Select..."
          options={ages}
        />
      </div>
    </div>
  );
}
