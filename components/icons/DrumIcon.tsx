export function DrumIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Drum shell */}
      <ellipse cx="50" cy="25" rx="35" ry="12" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      <rect x="15" y="25" width="70" height="50" fill="#E8B84B" stroke="#C49A2E" strokeWidth="2"/>
      <ellipse cx="50" cy="75" rx="35" ry="12" fill="#C49A2E" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Drum head lines */}
      <line x1="15" y1="25" x2="15" y2="75" stroke="#C49A2E" strokeWidth="2"/>
      <line x1="85" y1="25" x2="85" y2="75" stroke="#C49A2E" strokeWidth="2"/>
      
      {/* Drum tension rods */}
      <line x1="20" y1="25" x2="20" y2="75" stroke="#2A4A7F" strokeWidth="1"/>
      <line x1="35" y1="25" x2="35" y2="75" stroke="#2A4A7F" strokeWidth="1"/>
      <line x1="50" y1="25" x2="50" y2="75" stroke="#2A4A7F" strokeWidth="1"/>
      <line x1="65" y1="25" x2="65" y2="75" stroke="#2A4A7F" strokeWidth="1"/>
      <line x1="80" y1="25" x2="80" y2="75" stroke="#2A4A7F" strokeWidth="1"/>
      
      {/* Drumsticks */}
      <line x1="30" y1="10" x2="45" y2="30" stroke="#8B7355" strokeWidth="3" strokeLinecap="round"/>
      <line x1="70" y1="10" x2="55" y2="30" stroke="#8B7355" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
