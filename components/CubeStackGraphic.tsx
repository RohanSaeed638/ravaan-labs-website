export default function CubeStackGraphic() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="w-full max-w-[320px] drop-shadow-[0_0_50px_rgba(59,124,255,0.35)]"
    >
      <defs>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7BD8FF" />
          <stop offset="1" stopColor="#3E7BFA" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3E7BFA" />
          <stop offset="1" stopColor="#2451C4" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7B3FE4" />
          <stop offset="1" stopColor="#4A1FA0" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => {
        const cx = 180;
        const cy = 90 + i * 78;
        const w = 110;
        const h = 55;
        const depth = 34;
        return (
          <g key={i} opacity={1 - i * 0.12}>
            <polygon
              points={`${cx},${cy} ${cx + w},${cy + h / 2} ${cx},${cy + h} ${cx - w},${cy + h / 2}`}
              fill="url(#cubeTop)"
            />
            <polygon
              points={`${cx - w},${cy + h / 2} ${cx},${cy + h} ${cx},${cy + h + depth} ${cx - w},${cy + h / 2 + depth}`}
              fill="url(#cubeLeft)"
            />
            <polygon
              points={`${cx + w},${cy + h / 2} ${cx},${cy + h} ${cx},${cy + h + depth} ${cx + w},${cy + h / 2 + depth}`}
              fill="url(#cubeRight)"
            />
          </g>
        );
      })}
    </svg>
  );
}
