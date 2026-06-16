"use client"

import "./bg1.css";

export const Bg1 = () => {
    return (
        <>

            <div className="slides">

                <div>
                    <svg width="100%" viewBox="0 0 680 280" role="img">
                        <rect width="680" height="280" fill="#0d0d0d" />
                        <rect x="0" y="0" width="680" height="280" fill="#111111" />

                        {/* <!-- grid lines --> */}
                        <line x1="0" y1="56" x2="680" y2="56" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="0" y1="112" x2="680" y2="112" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="0" y1="168" x2="680" y2="168" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="0" y1="224" x2="680" y2="224" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="136" y1="0" x2="136" y2="280" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="272" y1="0" x2="272" y2="280" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="408" y1="0" x2="408" y2="280" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                        <line x1="544" y1="0" x2="544" y2="280" stroke="rgba(255,255,255,0.03)" stroke-width="1" />

                        {/* <!-- connector lines between nodes --> */}
                        <line x1="340" y1="140" x2="200" y2="80" stroke="rgba(158,33,2,0.4)" stroke-width="1" />
                        <line x1="340" y1="140" x2="480" y2="80" stroke="rgba(158,33,2,0.4)" stroke-width="1" />
                        <line x1="340" y1="140" x2="160" y2="200" stroke="rgba(158,33,2,0.3)" stroke-width="1" />
                        <line x1="340" y1="140" x2="520" y2="190" stroke="rgba(158,33,2,0.3)" stroke-width="1" />
                        <line x1="340" y1="140" x2="340" y2="40" stroke="rgba(232,94,29,0.25)" stroke-width="1" />
                        <line x1="200" y1="80" x2="100" y2="50" stroke="rgba(158,33,2,0.2)" stroke-width="1" />
                        <line x1="480" y1="80" x2="580" y2="50" stroke="rgba(158,33,2,0.2)" stroke-width="1" />
                        <line x1="160" y1="200" x2="80" y2="240" stroke="rgba(158,33,2,0.15)" stroke-width="1" />
                        <line x1="520" y1="190" x2="620" y2="230" stroke="rgba(158,33,2,0.15)" stroke-width="1" />
                        <line x1="200" y1="80" x2="160" y2="200" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                        <line x1="480" y1="80" x2="520" y2="190" stroke="rgba(255,255,255,0.05)" stroke-width="1" />

                        {/* <!-- outer small nodes --> */}
                        <circle cx="100" cy="50" r="4" fill="rgba(158,33,2,0.5)" stroke="rgba(232,94,29,0.4)" stroke-width="1" />
                        <circle cx="580" cy="50" r="4" fill="rgba(158,33,2,0.5)" stroke="rgba(232,94,29,0.4)" stroke-width="1" />
                        <circle cx="80" cy="240" r="4" fill="rgba(158,33,2,0.4)" stroke="rgba(232,94,29,0.3)" stroke-width="1" />
                        <circle cx="620" cy="230" r="4" fill="rgba(158,33,2,0.4)" stroke="rgba(232,94,29,0.3)" stroke-width="1" />
                        <circle cx="340" cy="40" r="5" fill="rgba(232,94,29,0.3)" stroke="rgba(232,94,29,0.5)" stroke-width="1" />

                        {/* <!-- mid nodes --> */}
                        <circle cx="200" cy="80" r="10" fill="rgba(158,33,2,0.25)" stroke="#9E2102" stroke-width="1.5" />
                        <circle cx="480" cy="80" r="10" fill="rgba(158,33,2,0.25)" stroke="#9E2102" stroke-width="1.5" />
                        <circle cx="160" cy="200" r="10" fill="rgba(158,33,2,0.2)" stroke="rgba(158,33,2,0.6)" stroke-width="1.5" />
                        <circle cx="520" cy="190" r="10" fill="rgba(158,33,2,0.2)" stroke="rgba(158,33,2,0.6)" stroke-width="1.5" />

                        {/* <!-- center main node glow rings --> */}
                        <circle cx="340" cy="140" r="48" fill="rgba(158,33,2,0.06)" />
                        <circle cx="340" cy="140" r="34" fill="rgba(158,33,2,0.1)" />
                        <circle cx="340" cy="140" r="22" fill="rgba(158,33,2,0.2)" stroke="#E85E1D" stroke-width="1.5" />
                        <circle cx="340" cy="140" r="12" fill="#9E2102" />

                        {/* <!-- certificate shape top right --> */}
                        <rect x="530" y="100" width="100" height="72" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
                        <line x1="542" y1="120" x2="618" y2="120" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
                        <line x1="542" y1="132" x2="600" y2="132" stroke="rgba(232,94,29,0.3)" stroke-width="0.5" />
                        <line x1="542" y1="142" x2="610" y2="142" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
                        <line x1="542" y1="152" x2="590" y2="152" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
                        <circle cx="580" cy="112" r="5" fill="rgba(232,94,29,0.4)" stroke="rgba(232,94,29,0.6)" stroke-width="0.5" />

                        {/* <!-- DID text bottom left --> */}
                        <rect x="40" y="220" width="160" height="24" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
                        <text x="52" y="236" font-family="monospace" font-size="9" fill="rgba(232,94,29,0.6)">did:educhain:8f2a—1b9c</text>

                        {/* <!-- label --> */}
                        <text x="40" y="268" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.2)" letter-spacing="2">ON-CHAIN CREDENTIALS</text>
                    </svg>
                </div>


                <div>
                    <div className="slide-label">Slide 03 — Academic Identity / Build Your Legacy</div>
                    <svg width="100%" viewBox="0 0 680 280" role="img">
                        <title>Academic identity illustration</title>
                        <desc>Abstract silhouette with rising pillars representing academic legacy and growth</desc>
                        <rect width="680" height="280" fill="#0d0d0d" />

                        {/* <!-- rising pillars / bars --> */}
                        <rect x="120" y="190" width="36" height="60" rx="2" fill="rgba(158,33,2,0.15)" stroke="rgba(158,33,2,0.3)" stroke-width="0.5" />
                        <rect x="170" y="160" width="36" height="90" rx="2" fill="rgba(158,33,2,0.2)" stroke="rgba(158,33,2,0.35)" stroke-width="0.5" />
                        <rect x="220" y="120" width="36" height="130" rx="2" fill="rgba(158,33,2,0.28)" stroke="rgba(232,94,29,0.4)" stroke-width="0.5" />
                        <rect x="270" y="80" width="36" height="170" rx="2" fill="rgba(158,33,2,0.35)" stroke="rgba(232,94,29,0.5)" stroke-width="0.5" />
                        <rect x="320" y="50" width="36" height="200" rx="2" fill="#9E2102" stroke="rgba(232,94,29,0.6)" stroke-width="0.5" />

                        {/* <!-- ground line --> */}
                        <line x1="100" y1="250" x2="580" y2="250" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />

                        {/* <!-- silhouette person right side --> */}
                        <circle cx="500" cy="90" r="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
                        <path d="M470 140 Q500 120 530 140 L540 250 L460 250 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />

                        {/* <!-- mortarboard cap --> */}
                        <rect x="478" y="68" width="44" height="6" rx="1" fill="rgba(232,94,29,0.5)" stroke="rgba(232,94,29,0.7)" stroke-width="0.5" />
                        <polygon points="500,58 522,68 500,72 478,68" fill="rgba(232,94,29,0.4)" stroke="rgba(232,94,29,0.6)" stroke-width="0.5" />
                        <line x1="522" y1="68" x2="530" y2="80" stroke="rgba(232,94,29,0.5)" stroke-width="1" />
                        <circle cx="530" cy="82" r="3" fill="rgba(232,94,29,0.6)" />

                        {/* <!-- light rays from pillar top --> */}
                        <line x1="338" y1="50" x2="280" y2="20" stroke="rgba(232,94,29,0.12)" stroke-width="1" />
                        <line x1="338" y1="50" x2="320" y2="15" stroke="rgba(232,94,29,0.1)" stroke-width="1" />
                        <line x1="338" y1="50" x2="360" y2="15" stroke="rgba(232,94,29,0.1)" stroke-width="1" />
                        <line x1="338" y1="50" x2="400" y2="22" stroke="rgba(232,94,29,0.12)" stroke-width="1" />
                        <line x1="338" y1="50" x2="440" y2="35" stroke="rgba(232,94,29,0.08)" stroke-width="1" />
                        <line x1="338" y1="50" x2="240" y2="30" stroke="rgba(232,94,29,0.08)" stroke-width="1" />

                        {/* <!-- floating star/sparkle dots --> */}
                        <circle cx="420" cy="50" r="2" fill="rgba(232,94,29,0.5)" />
                        <circle cx="260" cy="40" r="1.5" fill="rgba(232,94,29,0.4)" />
                        <circle cx="460" cy="30" r="2" fill="rgba(232,94,29,0.3)" />
                        <circle cx="200" cy="60" r="1.5" fill="rgba(232,94,29,0.3)" />
                        <circle cx="580" cy="80" r="2" fill="rgba(232,94,29,0.25)" />

                        {/* <!-- credential card floating --> */}
                        <rect x="560" y="120" width="80" height="56" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5" />
                        <line x1="572" y1="138" x2="628" y2="138" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
                        <line x1="572" y1="150" x2="615" y2="150" stroke="rgba(232,94,29,0.25)" stroke-width="0.5" />
                        <line x1="572" y1="160" x2="620" y2="160" stroke="rgba(255,255,255,0.05)" stroke-width="0.5" />
                        <circle cx="618" cy="130" r="4" fill="rgba(232,94,29,0.3)" stroke="rgba(232,94,29,0.5)" stroke-width="0.5" />

                    </svg>
                </div>

            </div>
        </>
    )
}

export const Bg2 = () => {
    return (
        <>
            <div>
                <svg width="100%" className="w-[60vw]" viewBox="0 0 680 280" role="img">
                    <rect width="180" height="280" fill="#111111" />

                    {/* <!-- scan lines --> */}
                    <line x1="0" y1="60" x2="680" y2="60" stroke="rgba(158,33,2,0.06)" stroke-width="8" />
                    <line x1="0" y1="120" x2="680" y2="120" stroke="rgba(158,33,2,0.04)" stroke-width="6" />
                    <line x1="0" y1="180" x2="680" y2="180" stroke="rgba(158,33,2,0.03)" stroke-width="4" />

                    {/* <!-- main document --> */}
                    <rect x="230" y="30" width="220" height="220" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />

                    {/* <!-- document lines --> */}
                    <line x1="254" y1="70" x2="426" y2="70" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                    <line x1="254" y1="86" x2="390" y2="86" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
                    <line x1="254" y1="102" x2="410" y2="102" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

                    {/* <!-- divider --> */}
                    <line x1="254" y1="118" x2="426" y2="118" stroke="rgba(158,33,2,0.3)" stroke-width="0.5" />

                    <line x1="254" y1="134" x2="380" y2="134" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
                    <line x1="254" y1="148" x2="400" y2="148" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
                    <line x1="254" y1="162" x2="360" y2="162" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
                    <line x1="254" y1="176" x2="395" y2="176" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

                    {/* <!-- university seal --> */}
                    <circle cx="340" cy="210" r="22" fill="rgba(158,33,2,0.15)" stroke="rgba(232,94,29,0.4)" stroke-width="1" />
                    <circle cx="340" cy="210" r="14" fill="none" stroke="rgba(232,94,29,0.25)" stroke-width="0.5" />
                    <text x="340" y="214" font-family="sans-serif" font-size="9" fill="rgba(232,94,29,0.7)" text-anchor="middle">FUTO</text>

                    {/* <!-- big verify shield right --> */}
                    <path d="M490 80 L540 80 L560 100 L560 170 L515 200 L470 170 L470 100 Z" fill="rgba(158,33,2,0.12)" stroke="rgba(232,94,29,0.35)" stroke-width="1" fill-rule="evenodd" />
                    <path d="M500 138 L510 150 L535 122" fill="none" stroke="#E85E1D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

                    {/* <!-- left side floating lines --> */}
                    <rect x="60" y="90" width="120" height="10" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
                    <rect x="60" y="110" width="90" height="10" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
                    <rect x="60" y="130" width="110" height="10" rx="2" fill="rgba(158,33,2,0.15)" stroke="rgba(232,94,29,0.2)" stroke-width="0.5" />
                    <rect x="60" y="150" width="80" height="10" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />

                    {/* <!-- verified badge bottom --> */}
                    <rect x="254" y="56" width="70" height="16" rx="8" fill="rgba(158,33,2,0.2)" stroke="rgba(232,94,29,0.4)" stroke-width="0.5" />
                </svg>
            </div>

        </>
    )
}