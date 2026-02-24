export const brandSettings = {
    logo: {
        src: "src/assets/logo/Cloaked Cyber Colored Logo.svg", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "CloakedCyber",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "src/assets/logo/Cloaked Cyber Colored Black WordMark.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "src/assets/logo/Cloaked Cyber Colored White WordMark.svg", // Add image path
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "src/assets/logo/Cloaked Cyber Black WordMark.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "src/assets/logo/Cloaked Cyber White WordMark.svg", // Add image path
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "src/assets/logo/CloakedCyber Profile Pic.png", // Add favicon URL here
    typography: {
        primaryFont: "Victor Mono Variable",  // this will automatically get set as the page font
        secondaryFont: "Anek Tamil Variable", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "Deep Black", hex: "#1e1e1e"},
        { name: "Rich Black", hex: "#2E2929" },
        { name: "Dark Gray", hex: "#423B3D" },
        { name: "Accent Gray", hex: "#454545" },
        { name: "White", hex: "#FFFFFF"},
        { name: "Off White", hex: "#FFFCFA" },
        { name: "Orange", hex: "#FF8F26" },
        { name: "Accent Brown", hex: "#804712" }

    ]
};