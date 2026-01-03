import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

function NeonStage() {
  const { scene } = useGLTF('../neon_stage_full2.glb');

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

function BloomEffect() {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef<EffectComposer | null>(null);

  useEffect(() => {
    const composer = new EffectComposer(gl);
    composerRef.current = composer;

    composer.setSize(size.width, size.height);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      2,
      3,
      0.2
    );
    composer.addPass(bloomPass);

    const handleResize = () => {
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      composer.dispose();
    };
  }, [gl, scene, camera, size]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return null;
}

export const Scene: React.FC = () => (
  <Canvas
    shadows
    camera={{ position: [0, 0, 0], fov: 60 }}
    dpr={[1, 2]}
    gl={{ antialias: false }}
    
  >
    <ambientLight intensity={5} color="#f400e8" />
    <directionalLight
      position={[0, 500, 1000]}
      intensity={1}
      castShadow
      shadow-mapSize-width={4096}
      shadow-mapSize-height={4096}
    />
    <directionalLight
      position={[90, 20, 10]}
      intensity={0.4}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
    <directionalLight
      position={[-45, -20, 10]}
      intensity={0.4}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />

    <NeonStage />

    <PointerLockControls />
    <PlayerControls />
    <BloomEffect />
  </Canvas>
);
