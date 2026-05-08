export function TrumpetIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trumpet mouthpiece */}
      <rect x="5" y="45" width="15" height="10" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Trumpet lead pipe */}
      <rect x="20" y="42" width="25" height="16" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Trumpet valve block */}
      <rect x="45" y="38" width="20" height="24" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Valves */}
      <circle cx="52" cy="45" r="4" fill="#C49A2E" stroke="#C49A2E" strokeWidth="1"/>
      <circle cx="52" cy="55" r="4" fill="#C49A2E" stroke="#C49A2E" strokeWidth="1"/>
      <circle cx="58" cy="50" r="4" fill="#C49A2E" stroke="#C49A2E" strokeWidth="1"/>
      
      {/* Trumpet bell */}
      <path d="M65 38 L95 20 L95 80 L65 62 Z" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Bell rim */}
      <ellipse cx="95" cy="50" rx="5" ry="30" fill="none" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Shine effect */}
      <path d="M70 40 L90 25" stroke="#FFD700" strokeWidth="2" opacity="0.5"/>
    </svg>
  );
}
