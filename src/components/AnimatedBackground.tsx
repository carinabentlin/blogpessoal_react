function AnimatedBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      
      {/* Fundo gradiente */}
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 [background-size:300%_300%] animate-[gradientMove_14s_ease-in-out_infinite]" />

      {/* Brilho suave */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] animate-pulse" />

      {/* Shine effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(60deg,transparent,rgba(255,255,255,0.12),transparent)] animate-[shineMove_6s_linear_infinite]" />
    </div>
  );
}
