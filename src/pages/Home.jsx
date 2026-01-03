import { Suspense } from "react";
import Scene from "../Scene";
import { ControlsOverlay } from "../components/ControlsOverlay";
import { TopNavOverlay } from "../components/TopNavOverlay";

export function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="text-pink-400 text-2xl font-gothic">Loading Metaverse...</div>
        </div>
      }>
        <Scene />
      </Suspense>
      <ControlsOverlay />
      <TopNavOverlay />
    </div>
  );
}

