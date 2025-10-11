import { ImageResponse } from 'next/og'

// Required for static export
export const dynamic = 'force-static'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '-0.5px',
        }}
      >
        CLR3
      </div>
    ),
    {
      ...size,
    }
  )
}
