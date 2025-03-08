import React, { useRef, useEffect } from "react";

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Add this null check

    const context = canvas.getContext("2d");
    if (!context) return; // Add this null check

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let drawing = false;

    const startDrawing = (event: MouseEvent) => {
      drawing = true;
      draw(event);
    };

    const endDrawing = () => {
      drawing = false;
      context.beginPath();
    };

    const draw = (event: MouseEvent) => {
      if (!drawing) return;

      context.lineWidth = 5;
      context.lineCap = "round";
      context.strokeStyle = "black";

      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", endDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} className="border" />;
};

export default Whiteboard;