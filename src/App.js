import "./styles.css";
import MuxVideo from "@mux/mux-video-react";

export default function App() {
  return (
    <div className="App">
      <MuxVideo
        style={{ height: "100%", maxWidth: "100%" }}
        playbackId="tpHuMQJhaC31ayVmiBG00XF8pFhx5ywMfN1FMMpa3cY4"
        streamType="on-demand"
        controls={false}
        autoPlay
        loop
        muted
      />
    </div>
  );
}
