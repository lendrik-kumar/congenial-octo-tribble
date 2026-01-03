import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function NeonStage() {
  const { scene } = useGLTF('../neon_stage2.glb');

  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, -1, -6]}
    />
  );
}

function PlayerControls() {
  const { camera } = useThree();

  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
  });

  const speed = 6;
  const gravity = 18;
  const jumpStrength = 6;
  const groundY = 0;
  const canJump = useRef(true);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW': keys.current.w = true; break;
        case 'KeyA': keys.current.a = true; break;
        case 'KeyS': keys.current.s = true; break;
        case 'KeyD': keys.current.d = true; break;
        case 'Space': keys.current.space = true; break;
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW': keys.current.w = false; break;
        case 'KeyA': keys.current.a = false; break;
        case 'KeyS': keys.current.s = false; break;
        case 'KeyD': keys.current.d = false; break;
        case 'Space': keys.current.space = false; break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    direction.current.set(0, 0, 0);

    if (keys.current.w) direction.current.z -= 1;
    if (keys.current.s) direction.current.z += 1;
    if (keys.current.a) direction.current.x -= 1;
    if (keys.current.d) direction.current.x += 1;

    direction.current.normalize();

    camera.translateX(direction.current.x * speed * delta);
    camera.translateZ(direction.current.z * speed * delta);

    // Jump
    if (keys.current.space && canJump.current) {
      velocity.current.y = jumpStrength;
      canJump.current = false;
    }

    // Gravity
    velocity.current.y -= gravity * delta;
    camera.position.y += velocity.current.y * delta;

    // Ground collision
    if (camera.position.y <= groundY) {
      velocity.current.y = 0;
      camera.position.y = groundY;
      canJump.current = true;
    }
  });

  return null;
}

export const Scene: React.FC = () => (
  <Canvas
    shadows
    camera={{ position: [0, 0, 0], fov: 60 }}
  >
    <color attach="background" args={['#7a067e']} />

    <ambientLight intensity={1} color="#f400e8" />
    <directionalLight
      position={[8, 15, 10]}
      intensity={2}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />

    <NeonStage />

    <PointerLockControls />
    <PlayerControls />
  </Canvas>
);
