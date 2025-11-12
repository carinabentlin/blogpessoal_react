function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Gradiente animado */}
      <div className="w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 [background-size:300%_300%] animate-[gradientMove_14s_ease-in-out_infinite]" />

      {/* Brilho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] animate-pulse" />

      {/* Reflexo */}
      <div className="absolute -inset-1 bg-[linear-gradient(60deg,transparent,rgba(255,255,255,0.18),transparent)] animate-[shineMove_6s_linear_infinite]" />
    </div>
  );
}
export default AnimatedBackground;
