"use client"

import React, { useEffect, useRef } from 'react'

export default function Logo() {

  const svgRef = useRef(null);

  useEffect(() => {
    svgRef.current.classList.add('active');
  }, [])

  return (
    <div className="">
      <svg className='logo w-full' ref={svgRef} fill="none" height="100" viewBox="0 0 1158 100" width="1158" xmlns="http://www.w3.org/2000/svg">
        <g className='logo-graphic' fill="currentColor">
          <circle cx="898.5" cy="50.5" r="12.5" className="delay-[200ms]"></circle>
          <path d="m923 100h-75v-100h75v25h-50v50h50z" className="delay-[300ms]"></path>
          <path d="m1083 0h-25v100h25v-37.5h50v37.5h25v-100h-25v37.5h-50z" className="delay-[400ms]"></path>
          <path d="m1028 100h-75v-100h75v25h-50v50h50z" className="delay-[500ms]"></path>
          <circle cx="402.5" cy="49.5" r="12.5" className="delay-[600ms]"></circle>
          <path clipRule="evenodd"
            d="m403 100c27.614 0 50-22.3858 50-50s-22.386-50-50-50-50 22.3858-50 50 22.386 50 50 50zm0-22.5c15.188 0 27.5-12.3122 27.5-27.5s-12.312-27.5-27.5-27.5-27.5 12.3122-27.5 27.5 12.312 27.5 27.5 27.5z"
            fillRule="evenodd" className="delay-[1300ms]"></path>
          <path d="m323 0h-87.5v25h54.688l-54.688 50v25h87.5v-25h-54.688l54.688-50z" className="delay-[700ms]"></path>
          <path d="m155.5 0-50 100h25l25-50 15 25h-15l-12.5 25h62.5l-25-50z" className="delay-[800ms]"></path>
          <path d="m25 0h-25v100h75.5v-25h-50.5z" className="delay-[900ms]"></path>
          <circle cx="533.5" cy="50.5" r="12.5" className="delay-[1000ms]"></circle>
          <path d="m508 100h-25v-100h75v25h-50z" className="delay-[1100ms]"></path>
          <circle cx="638.5" cy="50.5" r="12.5" className="delay-[1200ms]"></circle>
          <path d="m613 100h-25v-100h75v25h-50z" className="delay-[1300ms]"></path>
          <path d="m818 0h-100v25h37.5v75h25v-75h37.5z" className="delay-[1400ms]"></path>
        </g>
      </svg>
    </div>
  )
}
