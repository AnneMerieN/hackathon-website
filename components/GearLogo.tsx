'use client'

interface GearLogoProps {
  className?: string
  maskId?: string
}

export default function GearLogo({ className = '', maskId = 'gear-mask' }: GearLogoProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r="27" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} fill="currentColor">
        <circle cx="50" cy="50" r="42" />
        <rect x="44" y="0" width="12" height="23" />
        <rect x="44" y="77" width="12" height="23" />
        <rect x="0" y="44" width="23" height="12" />
        <rect x="77" y="44" width="23" height="12" />
        <rect x="73" y="13" width="9" height="9" transform="rotate(45 77.5 17.5)" />
        <rect x="18" y="13" width="9" height="9" transform="rotate(45 22.5 17.5)" />
        <rect x="73" y="78" width="9" height="9" transform="rotate(45 77.5 82.5)" />
        <rect x="18" y="78" width="9" height="9" transform="rotate(45 22.5 82.5)" />
      </g>
      <g fill="currentColor">
        <rect x="29" y="23" width="12" height="54" />
        <rect x="59" y="23" width="12" height="54" />
        <polygon points="41,40 59,34 59,46 41,52" />
      </g>
    </svg>
  )
}
