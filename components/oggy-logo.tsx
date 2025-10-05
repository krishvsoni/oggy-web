export function OggyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Cat head */}
        <circle cx="20" cy="22" r="12" fill="currentColor" opacity="0.9" />
        {/* Left ear */}
        <path d="M12 14 L8 8 L14 12 Z" fill="currentColor" opacity="0.9" />
        {/* Right ear */}
        <path d="M28 14 L32 8 L26 12 Z" fill="currentColor" opacity="0.9" />
        {/* Eyes */}
        <circle cx="16" cy="20" r="2" fill="#000" />
        <circle cx="24" cy="20" r="2" fill="#000" />
        {/* Nose */}
        <circle cx="20" cy="24" r="1.5" fill="#000" />
        {/* Whiskers */}
        <line x1="10" y1="22" x2="14" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="26" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
      <span className="text-2xl font-bold font-mono">Oggy</span>
    </div>
  )
}
