import { Environment, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";

const maps = {
  animal_crossing_map: {
    scale: 20,
    position: [-15, -1, 10],
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const map = "animal_crossing_map";

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics key={map}>
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
      </Physics>
    </>
  );
};
