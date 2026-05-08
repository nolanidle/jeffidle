export function GuitarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Guitar body */}
      <ellipse cx="50" cy="65" rx="30" ry="25" fill="#8B4513" stroke="#5D3A1A" strokeWidth="2"/>
      <ellipse cx="50" cy="65" rx="15" ry="12" fill="#5D3A1A"/>
      
      {/* Sound hole */}
      <circle cx="50" cy="65" r="8" fill="#2A1A0A" stroke="#5D3A1A" strokeWidth="2"/>
      
      {/* Guitar neck */}
      <rect x="45" y="15" width="10" height="35" fill="#5D3A1A" stroke="#3D2A1A" strokeWidth="2"/>
      
      {/* Guitar headstock */}
      <rect x="42" y="5" width="16" height="12" fill="#8B4513" stroke="#5D3A1A" strokeWidth="2"/>
      
      {/* Tuning pegs */}
      <circle cx="44" cy="8" r="2" fill="#C49A2E"/>
      <circle cx="56" cy="8" r="2" fill="#C49A2E"/>
      <circle cx="44" cy="14" r="2" fill="#C49A2E"/>
      <circle cx="56" cy="14" r="2" fill="#C49A2E"/>
      
      {/* Strings */}
      <line x1="47" y1="17" x2="47" y2="75" stroke="#D94F3D" strokeWidth="1"/>
      <line x1="49" y1="17" x2="49" y2="75" stroke="#D94F3D" strokeWidth="1"/>
      <line x1="50" y1="17" x2="50" y2="75" stroke="#D94F3D" strokeWidth="1"/>
      <line x1="51" y1="17" x2="51" y2="75" stroke="#D94F3D" strokeWidth="1"/>
      <line x1="53" y1="17" x2="53" y2="75" stroke="#D94F3D" strokeWidth="1"/>
      
      {/* Pickguard */}
      <path d="M35 60 Q30 65 35 70 Q40 72 50 70 Q60 72 65 70 Q70 65 65 60 Q60 58 50 60 Q40 58 35 60" fill="#1A1A1A" opacity="0.5"/>
    </svg>
  );
}
