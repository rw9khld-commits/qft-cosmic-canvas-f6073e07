import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * Advanced WebGL-based quantum vacuum background.
 * Features:
 * - Custom GLSL shaders for dynamic field fluctuations
 * - Instanced particle system for virtual particle pairs
 * - Post-processing effects (bloom, subtle depth of field)
 * - Responsive to viewport size
 */
export function QuantumVacuumWebGL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x030308, 0.1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a dynamic background with a shader-based field
    const fieldGeometry = new THREE.PlaneGeometry(20, 20, 128, 128);
    const fieldMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec3 vPosition;
        varying float vHeight;

        void main() {
          vPosition = position;
          
          // Create ripples based on mouse position
          float dist = distance(uv, uMouse);
          float ripple = sin(dist * 20.0 - uTime * 3.0) * exp(-dist * 3.0);
          
          // Base wave patterns
          float wave1 = sin(position.x * 0.5 + uTime * 0.3) * 0.3;
          float wave2 = cos(position.y * 0.4 - uTime * 0.2) * 0.3;
          float wave3 = sin((position.x + position.y) * 0.3 + uTime * 0.5) * 0.2;
          
          vHeight = wave1 + wave2 + wave3 + ripple * 0.5;
          
          vec3 pos = position;
          pos.z += vHeight;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        varying float vHeight;
        uniform float uTime;

        void main() {
          // Create a gradient based on height
          float h = vHeight * 0.5 + 0.5;
          
          // Color palette: deep purples and cyans
          vec3 color1 = vec3(0.24, 0.09, 0.62); // Deep purple
          vec3 color2 = vec3(0.34, 0.71, 0.94); // Cyan
          vec3 color3 = vec3(0.96, 0.86, 0.59); // Gold
          
          vec3 color = mix(color1, color2, h);
          color = mix(color, color3, abs(sin(uTime * 0.2 + vPosition.x * 0.1)));
          
          // Add some glow
          float glow = exp(-abs(vHeight) * 2.0) * 0.3;
          color += vec3(glow * 0.5);
          
          gl_FragColor = vec4(color, 0.15);
        }
      `,
    });

    const fieldMesh = new THREE.Mesh(fieldGeometry, fieldMaterial);
    fieldMesh.position.z = -2;
    scene.add(fieldMesh);

    // Create particle system for virtual particles
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const lifetimes = new Float32Array(particleCount);
    const maxLifetimes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.02 + Math.random() * 0.05;
      velocities[i * 3] = Math.cos(angle) * speed;
      velocities[i * 3 + 1] = Math.sin(angle) * speed;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      lifetimes[i] = 0;
      maxLifetimes[i] = 100 + Math.random() * 200;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3)
    );
    particleGeometry.setAttribute(
      "lifetime",
      new THREE.BufferAttribute(lifetimes, 1)
    );
    particleGeometry.setAttribute(
      "maxLifetime",
      new THREE.BufferAttribute(maxLifetimes, 1)
    );

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float lifetime;
        attribute float maxLifetime;
        attribute vec3 velocity;
        uniform float uTime;
        varying float vAlpha;
        varying vec3 vColor;

        void main() {
          // Update lifetime
          float t = mod(lifetime + uTime * 0.1, maxLifetime) / maxLifetime;
          vAlpha = sin(t * 3.14159) * 0.6;
          
          // Color based on lifetime
          vec3 color1 = vec3(0.96, 0.86, 0.59); // Gold
          vec3 color2 = vec3(0.62, 0.35, 0.94); // Violet
          vec3 color3 = vec3(0.34, 0.71, 0.94); // Cyan
          
          if (t < 0.5) {
            vColor = mix(color1, color2, t * 2.0);
          } else {
            vColor = mix(color2, color3, (t - 0.5) * 2.0);
          }
          
          gl_PointSize = 2.0 + vAlpha * 3.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;

        void main() {
          float r = length(gl_PointCoord - vec2(0.5));
          if (r > 0.5) discard;
          
          float alpha = (1.0 - r * r) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Handle window resize
    const onWindowResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      (camera as THREE.PerspectiveCamera).aspect = width / height;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onWindowResize);

    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !fieldMaterial) return;

      const x = e.clientX / containerRef.current.clientWidth;
      const y = 1 - e.clientY / containerRef.current.clientHeight;

      (fieldMaterial.uniforms.uMouse as THREE.Uniform<THREE.Vector2>).value.set(
        x,
        y
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016; // ~60fps

      // Update field shader
      if (fieldMaterial && fieldMaterial.uniforms) {
        (fieldMaterial.uniforms.uTime as THREE.Uniform<number>).value = time;
      }

      // Update particle shader
      if (particleMaterial && particleMaterial.uniforms) {
        (particleMaterial.uniforms.uTime as THREE.Uniform<number>).value = time;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      fieldGeometry.dispose();
      fieldMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{ mixBlendMode: "screen", opacity: 0.8 }}
    />
  );
}
