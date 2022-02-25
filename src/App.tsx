import VideoEditingTimeline from "video-editing-timeline-react";

import "./styles.css";

export default function App() {
  const config = {
    mode: "stander",
    canvasWidth: 3000,
    canvasHeight: 50,
    minimumScale: 10,
    minimumScaleTime: 1
  };
  return (
    <div className="App">
      <VideoEditingTimeline config={config} />
    </div>
  );
}
