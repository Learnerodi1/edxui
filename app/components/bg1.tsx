"use client"

import "./bg1.css";

export const Bg1 = () => {
    return (
        <>
            <div className="p-0">
                <div className="img-wrap">
                    <svg width="100%" viewBox="0 0 680 280" role="img" xmlns="http://www.w3.org/2000/svg">

                        <defs>
                            <radialGradient id="ga-center" cx="50%" cy="50%" r="55%">
                                <stop offset="0%" stop-color="#9E2102" stop-opacity="0.35" />
                                <stop offset="100%" stop-color="#9E2102" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="ga-bottom" cx="50%" cy="100%" r="60%">
                                <stop offset="0%" stop-color="#9E2102" stop-opacity="0.6" />
                                <stop offset="100%" stop-color="#9E2102" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="ga-cap" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#E85E1D" stop-opacity="0.3" />
                                <stop offset="100%" stop-color="#E85E1D" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="ga-card" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#E85E1D" stop-opacity="0.2" />
                                <stop offset="100%" stop-color="#E85E1D" stop-opacity="0" />
                            </radialGradient>
                        </defs>

                        {/* <!-- bg --> */}
                        <rect width="680" height="280" fill="#0a0a0a" />
                        <rect width="680" height="280" fill="url(#ga-bottom)" />
                        <rect width="680" height="280" fill="url(#ga-center)" />

                        {/* <!-- subtle grid --> */}
                        <line x1="0" y1="70" x2="680" y2="70" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
                        <line x1="0" y1="140" x2="680" y2="140" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
                        <line x1="0" y1="210" x2="680" y2="210" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
                        <line x1="170" y1="0" x2="170" y2="280" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
                        <line x1="340" y1="0" x2="340" y2="280" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
                        <line x1="510" y1="0" x2="510" y2="280" stroke="rgba(255,255,255,0.025)" stroke-width="1" />

                        {/* <!-- ===================== -->
                    <!-- GRADUATION CAP center -->
                    <!-- ===================== -->
                    <!-- cap glow bloom --> */}
                        <ellipse cx="260" cy="105" rx="90" ry="70" fill="url(#ga-cap)" />

                        {/* <!-- cap board (flat top) --> */}
                        <polygon points="180,100 260,72 340,100 260,128" fill="rgba(30,30,30,0.95)" stroke="#E85E1D" stroke-width="1.2" />
                        <polygon points="180,100 260,72 340,100 260,128" fill="none" stroke="#E85E1D" stroke-width="3" stroke-opacity="0.12" />

                        {/* <!-- cap top shine line --> */}
                        <line x1="200" y1="94" x2="300" y2="78" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

                        {/* <!-- center button on cap --> */}
                        <circle cx="260" cy="100" r="5" fill="#9E2102" stroke="#E85E1D" stroke-width="1" />
                        <circle cx="260" cy="100" r="10" fill="#E85E1D" fill-opacity="0.08" />

                        {/* <!-- tassel string down --> */}
                        <line x1="340" y1="100" x2="350" y2="148" stroke="rgba(232,94,29,0.7)" stroke-width="1.5" />
                        {/* <!-- tassel knot --> */}
                        <circle cx="350" cy="150" r="4" fill="#E85E1D" stroke="#E85E1D" stroke-width="0.5" />
                        <circle cx="350" cy="150" r="8" fill="#E85E1D" fill-opacity="0.1" />
                        {/* <!-- tassel fringe --> */}
                        <line x1="344" y1="154" x2="340" y2="172" stroke="rgba(232,94,29,0.6)" stroke-width="1" />
                        <line x1="348" y1="154" x2="346" y2="174" stroke="rgba(232,94,29,0.5)" stroke-width="1" />
                        <line x1="352" y1="154" x2="352" y2="174" stroke="rgba(232,94,29,0.5)" stroke-width="1" />
                        <line x1="356" y1="154" x2="358" y2="172" stroke="rgba(232,94,29,0.4)" stroke-width="1" />

                        {/* <!-- cap stem (top hat cylinder) --> */}
                        <rect x="244" y="100" width="32" height="18" rx="1" fill="rgba(20,20,20,0.95)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
                        {/* <!-- cap brim bottom --> */}
                        <ellipse cx="260" cy="118" rx="40" ry="6" fill="rgba(25,25,25,0.95)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />

                        {/* <!-- ==================== -->
                    <!-- DIPLOMA SCROLL left  -->
                    <!-- ==================== -->
                    <!-- scroll glow --> */}
                        <ellipse cx="110" cy="160" rx="65" ry="50" fill="#9E2102" fill-opacity="0.08" />

                        {/* <!-- scroll body --> */}
                        <rect x="58" y="120" width="104" height="80" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
                        <rect x="58" y="120" width="104" height="80" rx="4" fill="none" stroke="#E85E1D" stroke-width="0.5" stroke-opacity="0.15" />

                        {/* <!-- scroll end rolls --> */}
                        <ellipse cx="58" cy="160" rx="10" ry="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
                        <ellipse cx="162" cy="160" rx="10" ry="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />

                        {/* <!-- scroll content lines --> */}
                        <line x1="76" y1="140" x2="144" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
                        <line x1="76" y1="152" x2="136" y2="152" stroke="rgba(232,94,29,0.4)" stroke-width="1" />
                        <line x1="76" y1="163" x2="140" y2="163" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
                        <line x1="76" y1="173" x2="130" y2="173" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
                        <line x1="76" y1="183" x2="138" y2="183" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />

                        {/* <!-- scroll seal --> */}
                        <circle cx="110" cy="195" r="8" fill="rgba(158,33,2,0.4)" stroke="#E85E1D" stroke-width="0.8" />
                        <circle cx="110" cy="195" r="14" fill="#E85E1D" fill-opacity="0.07" />

                        {/* <!-- ribbon on scroll --> */}
                        <line x1="85" y1="120" x2="85" y2="105" stroke="rgba(232,94,29,0.5)" stroke-width="2" />
                        <line x1="135" y1="120" x2="135" y2="105" stroke="rgba(232,94,29,0.5)" stroke-width="2" />
                        <path d="M85 105 Q110 96 135 105" fill="none" stroke="rgba(232,94,29,0.5)" stroke-width="2" />

                        {/* <!-- ========================= -->
                    <!-- ON-CHAIN CREDENTIAL CARD  -->
                    <!-- ========================= -->
                    <!-- card glow --> */}
                        <ellipse cx="530" cy="155" rx="100" ry="80" fill="url(#ga-card)" />

                        {/* <!-- card body --> */}
                        <rect x="420" y="88" width="220" height="140" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
                        <rect x="420" y="88" width="220" height="140" rx="8" fill="none" stroke="#E85E1D" stroke-width="1" stroke-opacity="0.25" />
                        <rect x="420" y="88" width="220" height="140" rx="8" fill="none" stroke="#E85E1D" stroke-width="4" stroke-opacity="0.06" />

                        {/* <!-- card header strip --> */}
                        <rect x="420" y="88" width="220" height="32" rx="8" fill="rgba(158,33,2,0.2)" />
                        <rect x="420" y="104" width="220" height="16" fill="rgba(158,33,2,0.2)" />

                        {/* <!-- card header text lines --> */}
                        <line x1="440" y1="100" x2="560" y2="100" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
                        <line x1="440" y1="110" x2="520" y2="110" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />

                        {/* <!-- small cap icon in card header --> */}
                        <polygon points="598,96 618,88 638,96 618,104" fill="rgba(232,94,29,0.5)" stroke="#E85E1D" stroke-width="0.8" />
                        <circle cx="618" cy="96" r="3" fill="#9E2102" />

                        {/* <!-- card content --> */}
                        <line x1="440" y1="136" x2="620" y2="136" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />

                        {/* <!-- name line (prominent) --> */}
                        <rect x="440" y="142" width="140" height="8" rx="2" fill="rgba(255,255,255,0.1)" />

                        <line x1="440" y1="162" x2="580" y2="162" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
                        <line x1="440" y1="172" x2="560" y2="172" stroke="rgba(232,94,29,0.3)" stroke-width="0.8" />
                        <line x1="440" y1="182" x2="590" y2="182" stroke="rgba(255,255,255,0.05)" stroke-width="0.8" />

                        {/* <!-- DID string at bottom of card --> */}
                        <rect x="432" y="196" width="196" height="20" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(232,94,29,0.2)" stroke-width="0.5" />
                        <text x="442" y="210" font-family="monospace" font-size="9" fill="rgba(232,94,29,0.65)">did:educhain:8f2a—1b9c ✓</text>

                        {/* <!-- verified badge on card --> */}
                        <rect x="556" y="142" width="66" height="16" rx="8" fill="rgba(158,33,2,0.3)" stroke="rgba(232,94,29,0.5)" stroke-width="0.5" />
                        <rect x="556" y="142" width="66" height="16" rx="8" fill="none" stroke="#E85E1D" stroke-width="0.5" stroke-opacity="0.2" />
                        <text x="589" y="154" font-family="sans-serif" font-size="8" fill="#E85E1D" text-anchor="middle" letter-spacing="1">ON-CHAIN</text>

                        {/* 
                    <!-- ========================= -->
                    <!-- CONNECTING ELEMENTS       -->
                    <!-- ========================= -->
                    <!-- line from scroll to cap --> */}
                        <line x1="162" y1="155" x2="220" y2="130" stroke="rgba(232,94,29,0.2)" stroke-width="0.8" stroke-dasharray="4 3" />

                        {/* <!-- line from cap to card --> */}
                        <line x1="340" y1="105" x2="420" y2="120" stroke="rgba(232,94,29,0.2)" stroke-width="0.8" stroke-dasharray="4 3" />

                        {/* <!-- floating sparkle dots --> */}
                        <circle cx="390" cy="60" r="2.5" fill="#E85E1D" fill-opacity="0.5" />
                        <circle cx="390" cy="60" r="6" fill="#E85E1D" fill-opacity="0.08" />
                        <circle cx="200" cy="50" r="2" fill="#E85E1D" fill-opacity="0.4" />
                        <circle cx="200" cy="50" r="5" fill="#E85E1D" fill-opacity="0.07" />
                        <circle cx="580" cy="60" r="2" fill="#E85E1D" fill-opacity="0.35" />
                        <circle cx="80" cy="80" r="1.5" fill="#E85E1D" fill-opacity="0.3" />
                        <circle cx="640" cy="100" r="2" fill="#E85E1D" fill-opacity="0.25" />
                        <circle cx="300" cy="240" r="1.5" fill="#E85E1D" fill-opacity="0.3" />

                    </svg>
                </div>
            </div>

        </>
    )
}