(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a75f18._.js", {

"[project]/components/Courses/CourseCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const CourseCard = ({ title, description, image, link })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full  cursor-pointer bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-80 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: title,
                        layout: "fill",
                        objectFit: "cover",
                        className: "rounded-t-xl "
                    }, void 0, false, {
                        fileName: "[project]/components/Courses/CourseCard.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Courses/CourseCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col justify-between flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-[#162726] mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/CourseCard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-[#4F4F4F] mb-4",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/CourseCard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-4  text-[#0B96F3]  font-medium hover:underline",
                            children: "Learn More →"
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/CourseCard.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Courses/CourseCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Courses/CourseCard.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Courses/CourseCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = CourseCard;
const __TURBOPACK__default__export__ = CourseCard;
var _c;
__turbopack_refresh__.register(_c, "CourseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Courses/Tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/CourseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const generateLink = (title)=>"/courses/" + title.toLowerCase().replace(/[^\w]+/g, "-");
const Tabs = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Job-Oriented Specialization");
    const coursesByCategory = {
        "Job-Oriented Specialization": [
            {
                id: 1,
                title: "Advanced Embedded System Design",
                description: "Course details...",
                image: "/courses2/Advanced Embedded System Design (5).png",
                link: generateLink("Advanced Embedded System Design"),
                category: "job-oriented"
            },
            {
                id: 2,
                title: "Advanced VLSI Design & Verification",
                description: "Course details...",
                image: "/courses2/Advanced VLSI.png",
                link: generateLink("Advanced VLSI Design & Verification"),
                category: "job-oriented"
            },
            {
                id: 3,
                title: "Advanced ASIC Verification (VLSI VM)",
                description: "Course details...",
                image: "/courses2/Advanced ASIC Verification (VLSI VM) (1).png",
                link: generateLink("Advanced ASIC Verification (VLSI VM)"),
                category: "job-oriented"
            },
            {
                id: 4,
                title: "Advanced VLSI Design & DFT (VLSI DFT)",
                description: "Course details...",
                image: "/courses2/Advanced VLSI Design.png",
                link: generateLink("Advanced VLSI Design & DFT (VLSI DFT)"),
                category: "job-oriented"
            },
            {
                id: 5,
                title: "Advanced Physical Design & Verification (VLSI PD)",
                description: "Course details...",
                image: "/courses2/Advanced Physical.png",
                link: generateLink("Advanced Physical Design & Verification (VLSI PD)"),
                category: "job-oriented"
            }
        ],
        "Academic Programs": [
            {
                id: 1,
                title: "VLSI Internship Program",
                description: "Course details...",
                image: "/courses/Advanced Embedded System Design (1).png",
                link: generateLink("VLSI Internship Program"),
                category: "academic programs"
            },
            {
                id: 2,
                title: "Executive Courses Program",
                description: "Course details...",
                image: "/blog/blog2.jpg",
                link: generateLink("Executive Courses Program"),
                category: "academic programs"
            }
        ],
        "Emerging Technology": [
            {
                id: 1,
                title: "IoT – Internet of Things",
                description: "Course details...",
                image: "/courses2/IoTInter.png",
                link: generateLink("IoT – Internet of Things"),
                category: "emerging technology"
            },
            {
                id: 2,
                title: "Edge AI – Edge Artificial Intelligence",
                description: "Course details...",
                image: "/courses2/EdgeAI.png",
                link: generateLink("Edge AI – Edge Artificial Intelligence"),
                category: "emerging technology"
            },
            {
                id: 3,
                title: "RISC-V Architecture",
                description: "Course details...",
                image: "/courses2/RISC-V Architecture (1).png",
                link: generateLink("RISC-V Architecture"),
                category: "emerging technology"
            },
            {
                id: 4,
                title: "ARM Architecture",
                description: "Course details...",
                image: "/courses2/ARM Architecture.png",
                link: generateLink("ARM Architecture"),
                category: "emerging technology"
            },
            {
                id: 5,
                title: "IC Packaging & Manufacturing",
                description: "Course details...",
                image: "/courses2/ICManufacturing.png",
                link: generateLink("IC Packaging & Manufacturing"),
                category: "emerging technology"
            }
        ],
        "VLSI Internship": [
            {
                id: 1,
                title: "Physical Design (PD)",
                description: "Internship details on Physical Design.",
                image: "/courses2/PDesign hysical (PD).png",
                link: generateLink("Physical Design (PD)"),
                category: "VLSI internship"
            },
            {
                id: 2,
                title: "Physical Verification (PV)",
                description: "Internship details on Physical Verification.",
                image: "/courses2/EdgeAI.png",
                link: generateLink("Physical Verification (PV)"),
                category: "VLSI internship"
            },
            {
                id: 3,
                title: "Design For Testing (DFT)",
                description: "Internship details on Design For Testing.",
                image: "/courses2/Design For Testing (1).png",
                link: generateLink("Design For Testing (DFT)"),
                category: "VLSI internship"
            },
            {
                id: 4,
                title: "ASIC Design",
                description: "Internship details on ASIC Design.",
                image: "/courses2/ASIC Design (1).png",
                link: generateLink("ASIC Design"),
                category: "VLSI internship"
            },
            {
                id: 5,
                title: "Synthesis",
                description: "Internship details on Synthesis.",
                image: "/courses2/Synthesis (1).png",
                link: generateLink("Synthesis"),
                category: "VLSI internship"
            },
            {
                id: 6,
                title: "Static Timing Analysis (STA)",
                description: "Internship details on Static Timing Analysis.",
                image: "/courses2/Static Timing Analysis (STA) (2).png",
                link: generateLink("Static Timing Analysis (STA)"),
                category: "VLSI internship"
            }
        ],
        "Part-Time Courses": [
            {
                id: 1,
                title: "VLSI Design Methodology (PT)",
                description: "Part-time course...",
                image: "/courses2/VLSI Design Methodology (PT) (1).png",
                link: generateLink("VLSI Design Methodology (PT)"),
                category: "part-time"
            },
            {
                id: 2,
                title: "Advanced ASIC Verification (VLSI VM-PT)",
                description: "Part-time course...",
                image: "/courses2/Advanced ASIC Verification (VLSI VM-PT).png",
                link: generateLink("Advanced ASIC Verification (VLSI VM-PT)"),
                category: "part-time"
            }
        ],
        "Online Courses": [
            {
                id: 1,
                title: "RTL Design using Verilog HDL",
                description: "Online course on RTL design using Verilog HDL.",
                image: "/courses2/RTL Design using Verilog HDL (1).png",
                link: generateLink("RTL Design using Verilog HDL"),
                category: "online courses"
            },
            {
                id: 2,
                title: "Design Stream (RTL, STA, Synthesis)",
                description: "Covers RTL, STA, and Synthesis.",
                image: "/courses2/DesignStream.png",
                link: generateLink("Design Stream (RTL, STA, Synthesis)"),
                category: "online courses"
            },
            {
                id: 3,
                title: "Verification Stream (UVM, SV)",
                description: "UVM and SystemVerilog courses.",
                image: "/courses2/Verification.png",
                link: generateLink("Verification Stream (UVM, SV)"),
                category: "online courses"
            },
            {
                id: 4,
                title: "Embedded Systems & IoT",
                description: "Courses on Embedded Systems and IoT.",
                image: "/courses2/EmbeddedSystems.png",
                link: generateLink("Embedded Systems & IoT"),
                category: "online courses"
            },
            {
                id: 5,
                title: "Core Electronics (DSP, RF, Device Physics)",
                description: "Covers DSP, RF, and Device Physics.",
                image: "/courses2/CoreE.png",
                link: generateLink("Core Electronics (DSP, RF, Device Physics)"),
                category: "online courses"
            },
            {
                id: 6,
                title: "Emerging Tech (RISC-V, Edge AI, ARM)",
                description: "Covers RISC-V, Edge AI, and ARM.",
                image: "/courses2/EmergingTech.png",
                link: generateLink("Emerging Tech (RISC-V, Edge AI, ARM)"),
                category: "online courses"
            }
        ],
        "Core Technical Courses": [
            {
                id: 1,
                title: "Semiconductor Physics and Device Modelling",
                description: "Study of semiconductor physics and modeling.",
                image: "/courses2/Semiconductor Physics and Device Modelling.png",
                link: generateLink("Semiconductor Physics and Device Modelling"),
                category: "core technical"
            },
            {
                id: 2,
                title: "Semiconductor Manufacturing & Process Technology",
                description: "Manufacturing processes and technology.",
                image: "/courses2/SemiconductorMan.png",
                link: generateLink("Semiconductor Manufacturing & Process Technology"),
                category: "core technical"
            },
            {
                id: 3,
                title: "RF and Microwave Engineering",
                description: "Topics in RF and microwave engineering.",
                image: "/courses2/RF and Microwave Engineering.png",
                link: generateLink("RF and Microwave Engineering"),
                category: "core technical"
            },
            {
                id: 4,
                title: "Hardware Security and Reliability",
                description: "Ensuring hardware security.",
                image: "/courses2/Hardware Security and Reliability.png",
                link: generateLink("Hardware Security and Reliability"),
                category: "core technical"
            },
            {
                id: 5,
                title: "PCB Design and Hardware Prototyping",
                description: "PCB design techniques and prototyping.",
                image: "/courses2/PCB Design and Hardware Prototyping (1).png",
                link: generateLink("PCB Design and Hardware Prototyping"),
                category: "core technical"
            },
            {
                id: 6,
                title: "PLC – SCADA (Industrial Automation)",
                description: "PLC and SCADA systems.",
                image: "/courses2/PLCSCADA.png",
                link: generateLink("PLC – SCADA (Industrial Automation)"),
                category: "core technical"
            },
            {
                id: 7,
                title: "Industrial Electrical and Control Systems",
                description: "Industrial electrical systems and control.",
                image: "/courses2/Industrial Electrical and Control Systems (1).png",
                link: generateLink("Industrial Electrical and Control Systems"),
                category: "core technical"
            }
        ]
    };
    const handleTabChange = (category)=>{
        setActiveTab(category);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "md:py-16 py-10 md:px-5 px-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 mb-12 bg-[#EBF7FF] py-4 px-3 justify-center",
                    children: Object.keys(coursesByCategory).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabChange(category),
                            className: `px-4 py-2 rounded-[2px] text-lg font-bold transition-all duration-300 ${activeTab === category ? "bg-[#0B96F3] text-white" : "bg-white text-[#4F4F4F]"}`,
                            children: category
                        }, category, false, {
                            fileName: "[project]/components/Courses/Tabs.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Courses/Tabs.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: coursesByCategory[activeTab].map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...course
                            }, course.id, false, {
                                fileName: "[project]/components/Courses/Tabs.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this))
                    }, activeTab, false, {
                        fileName: "[project]/components/Courses/Tabs.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Courses/Tabs.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Courses/Tabs.tsx",
            lineNumber: 319,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Courses/Tabs.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
};
_s(Tabs, "r4nMsza10gD/Qv5cQnFnOEjcPX8=");
_c = Tabs;
const __TURBOPACK__default__export__ = Tabs;
var _c;
__turbopack_refresh__.register(_c, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Courses/banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Banner = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:py-48 py-16 bg-cover bg-top mt-[85px] bg-[url('/careerbg.png')]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-[#ffffff]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl lg:text-7xl",
                        children: [
                            "Programs ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0B96F3]",
                                children: "&"
                            }, void 0, false, {
                                fileName: "[project]/components/Courses/banner.tsx",
                                lineNumber: 13,
                                columnNumber: 24
                            }, this),
                            " Courses"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Courses/banner.tsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Courses/banner.tsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Courses/banner.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Courses/banner.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_refresh__.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Courses/PromoBanner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PromoBanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
function PromoBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[url('/secbg.png')] bg-cover bg-center text-white md:py-16 py-10 px-2 md:px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "container mx-auto grid md:grid-cols-3 gap-12 items-center",
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: true,
                amount: 0.3
            },
            variants: fadeInUp,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2 space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl  md:text-5xl  leading-snug",
                            children: [
                                "Expand your Semicon Career ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 31,
                                    columnNumber: 40
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#0B96F3]",
                                    children: "Opportunities with SkillFelix"
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 32,
                                    columnNumber: 12
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg sm:text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                " Job-oriented VLSI courses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                " Job-oriented Embedded Systems course"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                " Part-time VLSI courses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                " Online VLSI courses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                " VLSI Internship"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                " Embedded Internship"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " md:text-left space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl font-semibold",
                            children: "FLAT"
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline justify-center md:justify-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl sm:text-7xl font-bold",
                                    children: "40%"
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold",
                                    children: "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl",
                            children: "On Blended VLSI Courses"
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary flex items-center mt-4 gap-3 text-[#ffffff] hover:bg-[#000717]",
                                children: [
                                    "Enroll Now!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/arrowb.svg",
                                        alt: "arrow",
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Courses/PromoBanner.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Courses/PromoBanner.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/PromoBanner.tsx",
                            lineNumber: 68,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Courses/PromoBanner.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Courses/PromoBanner.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Courses/PromoBanner.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PromoBanner;
var _c;
__turbopack_refresh__.register(_c, "PromoBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Courses/Varification.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Varification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Varification() {
    _s();
    const refUse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Varification.useEffect": ()=>{
            const container = refUse.current;
            if (!container) return;
            const ulList = container.querySelector("ul");
            if (!ulList) return;
            ulList.innerHTML += ulList.innerHTML;
            let scrollTop = 0;
            const scrollPX = 1;
            const scrollSpeed = 10;
            const startScroll = {
                "Varification.useEffect.startScroll": ()=>{
                    intervalRef.current = setInterval({
                        "Varification.useEffect.startScroll": ()=>{
                            scrollTop += scrollPX;
                            if (scrollTop > ulList.scrollHeight / 2) {
                                scrollTop = 0;
                            }
                            container.scrollTop = scrollTop;
                        }
                    }["Varification.useEffect.startScroll"], scrollSpeed);
                }
            }["Varification.useEffect.startScroll"];
            const stopScroll = {
                "Varification.useEffect.stopScroll": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            }["Varification.useEffect.stopScroll"];
            startScroll();
            container.addEventListener("mouseenter", stopScroll);
            container.addEventListener("mouseleave", startScroll);
            return ({
                "Varification.useEffect": ()=>{
                    stopScroll();
                    container.removeEventListener("mouseenter", stopScroll);
                    container.removeEventListener("mouseleave", startScroll);
                }
            })["Varification.useEffect"];
        }
    }["Varification.useEffect"], []);
    const jobRolesArray = [
        {
            id: 1,
            title: "SOC Verification Engineer",
            img: "/companies_varify/scrollimg1.jpg"
        },
        {
            id: 2,
            title: "DFT Specialist",
            img: "/companies_varify/scrollimg2.jpg"
        },
        {
            id: 3,
            title: "IP Verification Engineer",
            img: "/companies_varify/scrollimg3.jpg"
        },
        {
            id: 4,
            title: "DFT Engineer",
            img: "/companies_varify/scrollimg4.jpg"
        },
        {
            id: 5,
            title: "Design and Verification Engineer",
            img: "/companies_varify/scrollimg5.jpg"
        },
        {
            id: 6,
            title: "Application Engineer",
            img: "/companies_varify/scrollimg6.jpg"
        },
        {
            id: 7,
            title: "FPGA Design Engineer",
            img: "/companies_varify/scrollimg7.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-10 md:py-16 md:px-5 px-2 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-0 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-normal text-center py-4 md:py-8 text-black",
                    children: [
                        "Companies  ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#0B96F3]",
                            children: "you can go"
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/Varification.tsx",
                            lineNumber: 65,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Courses/Varification.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 py-2 md:py-8 gap-10 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/companies_varify/halfgirl.jpg",
                                alt: "Half Girl",
                                width: 550,
                                height: 780,
                                className: "rounded-xl md:h-[780px] w-full shadow-[0_0_20px_rgba(0,0,0,0.3)] object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/Courses/Varification.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/Varification.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-[780px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl  leading md:leading-[45px] text-center md:text-left",
                                        children: "Best-in-Industry Job Roles After SkillFelix Course Completion"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Courses/Varification.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/Varification.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden mt-8",
                                    ref: refUse,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list",
                                        children: jobRolesArray.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "border-[#0B96F3]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center rounded border-[#0B96F3] border-1 bg-white p-2 my-3 md:my-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.img,
                                                            alt: "Half Girl",
                                                            width: 70,
                                                            height: 70
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Courses/Varification.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base md:text-lg mx-5",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Courses/Varification.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Courses/Varification.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/components/Courses/Varification.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Courses/Varification.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Courses/Varification.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Courses/Varification.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Courses/Varification.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Courses/Varification.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Courses/Varification.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, this);
}
_s(Varification, "WT4ST3ehV44JhVOaZ37cYf7SYpI=");
_c = Varification;
var _c;
__turbopack_refresh__.register(_c, "Varification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/courses/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>courses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$PromoBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/PromoBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$Varification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/Varification.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function courses() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$Varification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$PromoBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/courses/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_a75f18._.js.map