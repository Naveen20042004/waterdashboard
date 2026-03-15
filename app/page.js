'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Added this back for your original logo

export default function Dashboard() {
    // State variables for flows
    const [mainInletFlow, setMainInletFlow] = useState(32);
    const [bottlingFlow, setBottlingFlow] = useState(10);
    const [dairyFlow, setDairyFlow] = useState(20);

    // Mass Balance Leakage Calculation
    const totalConsumption = bottlingFlow + dairyFlow;
    const deltaV = mainInletFlow - totalConsumption;
    const leakThreshold = 1.5;
    const isLeaking = deltaV > leakThreshold;

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans text-slate-800">
            {/* Header */}
            <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                    {/* RESTORED ORIGINAL LOGO */}
                    <div className="w-12 h-12 relative overflow-hidden rounded-full">
                        <Image
                            src="/logo.jpeg"
                            alt="Water Management Logo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="48px"
                        />
                    </div>
                    <div>
                        {/* REMOVED THE WORD "INTELLIGENT" */}
                        <h1 className="text-2xl font-bold text-gray-900">Water Management</h1>
                        <p className="text-sm text-gray-500">Industrial MVP Dashboard | Bottling & Dairy Operations</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
                    <span className="font-semibold">Plant Manager</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">PM</span>
                </div>
            </header>

            {/* LEAKAGE DETECTION BANNER */}
            <div className={`mb-8 p-4 rounded-lg shadow-md border-l-8 flex items-center justify-between ${isLeaking ? 'bg-red-50 border-red-600' : 'bg-green-50 border-green-500'}`}>
                <div>
                    <h2 className={`text-lg font-bold ${isLeaking ? 'text-red-800' : 'text-green-800'}`}>
                        {isLeaking ? '⚠️ CRITICAL: PIPELINE LEAK DETECTED' : '✅ SYSTEM NORMAL: NO LEAKS'}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>Mass Balance (ΔV):</strong> {deltaV.toFixed(2)} L/min variance detected.
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium">Main Supply: {mainInletFlow} L/min</p>
                    <p className="text-sm font-medium">Total Consumption: {totalConsumption} L/min</p>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Storage Tank */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-semibold mb-2">STORAGE TANK</h3>
                    <p className="text-xs text-blue-600 mb-2">Ultrasonic Sensor</p>
                    <div className="text-4xl font-bold mb-2">84%</div>
                    <p className="text-xs text-gray-400">Dynamic Threshold: 80% (Winter)</p>
                </div>

                {/* Source Yield */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-semibold mb-2">SOURCE YIELD</h3>
                    <p className="text-xs text-blue-600 mb-2">Pressure Transducer</p>
                    <div className="text-4xl font-bold mb-2">32 PSI</div>
                    <p className="text-xs text-green-600">Status: Optimal Yield</p>
                    <p className="text-xs text-gray-400">Safe Floor: &gt; 15 PSI</p>
                </div>

                {/* Pump Motor */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-semibold mb-2">PUMP MOTOR (VSD)</h3>
                    <p className="text-xs text-blue-600 mb-2">RS485 Modbus</p>
                    <div className="text-4xl font-bold mb-2">42 Hz</div>
                    <p className="text-xs text-gray-500">Logic: Scaled Extraction</p>
                    <p className="text-xs text-gray-400">Hardware Limit: ≥ 25 Hz</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Plant Inlet Flow */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-semibold mb-4">PLANT INLET FLOW (YF-S201)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="font-medium">Bottling Line</span>
                            <span className="text-xl font-bold text-blue-600">{bottlingFlow} L/min</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Dairy Plant</span>
                            <span className="text-xl font-bold text-blue-600">{dairyFlow} L/min</span>
                        </div>
                    </div>
                </div>

                {/* External API & Emergency Halt */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-semibold mb-2">EXTERNAL WATER VENDOR API</h3>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🚛</span>
                            <span className="font-medium text-gray-700">Automated Procurement: Standby</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-4">Tank level is above critical threshold</p>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded border border-gray-300 transition-colors">
                            Force Manual Order
                        </button>
                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2">
                        <span>🛑</span> EMERGENCY PUMP HALT (BYPASS LOGIC)
                    </button>
                </div>
            </div>
        </div>
    );
}