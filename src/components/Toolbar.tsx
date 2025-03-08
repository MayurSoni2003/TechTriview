import React from "react";

interface ToolbarProps {
  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setColor, setBrushSize }) => {
  return (
    <div className="toolbar">
      <label>
        Color:
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <label>
        Brush Size:
        <input
          type="number"
          min="1"
          max="50"
          defaultValue="5"
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Toolbar;