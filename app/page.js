import Image from "next/image";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-zinc-950 text-zinc-50 font-sans">

            {/* HEADER */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-4">
                    {/* LOGO IMAGE */}
                    <Image
                        src="/logo.jpeg"
                        alt="Intelligent Water Management Logo"
                        width={85}
                        height={85}
                        className="rounded-lg shadow-lg shadow-blue-900/20"
                    />
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Intelligent Water Management</h1>
                        <p className="text-zinc-500 mt-1">Industrial MVP Dashboard | Bottling & Dairy Operations</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0 bg-zinc-900 py-2 px-4 rounded-full border border-zinc-800">
                    <span className="text-sm font-medium text-zinc-300">Plant Manager</span>
                    <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">PM</div>
                </div>
            </div>
            {/* TELEMETRY GRID (Perception & Actuation Layer) */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                {/* Card 1: Storage Tank (Upgraded Progress Bar & Glow) */}
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6 flex flex-col shadow-2xl shadow-blue-900/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
                    <div className="flex justify-between items-start mb-4 relative">
                        <h2 className="text-zinc-400 font-medium tracking-wide">STORAGE TANK</h2>
                        <span className="text-xs bg-blue-950 text-blue-400 px-2 py-1 rounded border border-blue-900 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            Ultrasonic
                        </span>
                    </div>
                    <div className="flex items-baseline gap-2 relative">
                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">84</span>
                        <span className="text-xl text-zinc-500">%</span>
                    </div>
                    {/* Advanced Visual Tank Level Graphic */}
                    <div className="w-full bg-zinc-950 rounded-full h-4 mt-6 p-1 border border-zinc-800 relative">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative overflow-hidden" style={{ width: '84%' }}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]"></div>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-4 font-mono relative">Dynamic Threshold: 80% (Winter)</p>
                </div>

                {/* Card 2: Borewell (Added Trendline Sparkline Chart) */}
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 rounded-xl p-6 flex flex-col shadow-2xl shadow-emerald-900/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                    <div className="flex justify-between items-start mb-4 relative">
                        <h2 className="text-zinc-400 font-medium tracking-wide">SOURCE YIELD</h2>
                        <span className="text-xs bg-emerald-950 text-emerald-400 px-2 py-1 rounded border border-emerald-900 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Transducer
                        </span>
                    </div>
                    <div className="flex justify-between items-end relative">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">32</span>
                            <span className="text-xl text-zinc-500">PSI</span>
                        </div>
                        {/* SVG Sparkline Graphic */}
                        <svg width="80" height="35" viewBox="0 0 80 35" className="opacity-90">
                            <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,8 L60,12 L70,5 L80,10" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,8 L60,12 L70,5 L80,10 L80,35 L0,35 Z" fill="url(#emeraldGradient)" opacity="0.2" />
                            <defs>
                                <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#34d399" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="text-sm text-emerald-500 mt-4 font-medium relative flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Status: Optimal Yield
                    </p>
                    <p className="text-xs text-zinc-500 mt-1 font-mono relative">Safe Floor: &gt; 15 PSI</p>
                </div>

                {/* Card 3: Motor Control (Added Frequency Wave Graphic) */}
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 rounded-xl p-6 flex flex-col shadow-2xl shadow-amber-900/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500"></div>
                    <div className="flex justify-between items-start mb-4 relative">
                        <h2 className="text-zinc-400 font-medium tracking-wide">PUMP MOTOR (VSD)</h2>
                        <span className="text-xs bg-amber-950 text-amber-400 px-2 py-1 rounded border border-amber-900 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                            RS485 Modbus
                        </span>
                    </div>
                    <div className="flex justify-between items-end relative">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">42</span>
                            <span className="text-xl text-zinc-500">Hz</span>
                        </div>
                        {/* SVG Frequency Wave Graphic */}
                        <svg width="80" height="30" viewBox="0 0 80 30" className="opacity-90">
                            <path d="M0,15 Q10,0 20,15 T40,15 T60,15 T80,15" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <p className="text-sm text-amber-500 mt-4 font-medium relative flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span> Logic: Scaled Extraction
                    </p>
                    <p className="text-xs text-zinc-500 mt-1 font-mono relative">Hardware Limit: ≥ 25 Hz</p>
                </div>

            </div>
            {/* SECONDARY ROW: Flow & Automated Ordering */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                {/* Plant Consumption Block */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h2 className="text-zinc-400 font-medium tracking-wide mb-6">PLANT INLET FLOW (YF-S201)</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                            <span className="text-zinc-300">Bottling Line 1</span>
                            <span className="font-mono text-zinc-400">0 L/min</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                            <span className="text-zinc-300">Dairy Plant 2</span>
                            <span className="font-mono text-zinc-400">0 L/min</span>
                        </div>
                    </div>
                </div>

                {/* External Vendor Block */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-zinc-400 font-medium tracking-wide mb-4">EXTERNAL WATER VENDOR API</h2>
                    <div className="h-16 w-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border border-zinc-700">
                        <span className="text-2xl">🚛</span>
                    </div>
                    <span className="text-zinc-300 font-medium mb-1">Automated Procurement: Standby</span>
                    <span className="text-xs text-zinc-500 mb-6 font-mono">Tank level is above critical threshold</span>
                    <button className="w-full max-w-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 py-3 rounded-lg font-bold transition-colors text-sm">
                        Force Manual Order
                    </button>
                </div>

            </div>

            {/* CRITICAL ACTION ROW */}
            <div className="w-full max-w-6xl mt-auto">
                <button className="w-full bg-red-950/50 hover:bg-red-900/50 border border-red-900 text-red-500 py-4 rounded-xl font-bold transition-colors tracking-widest">
                    EMERGENCY PUMP HALT (BYPASS LOGIC)
                </button>
            </div>

        </main>
    );
}