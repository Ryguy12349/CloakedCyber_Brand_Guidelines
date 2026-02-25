export const brandSettings = {
    logo: {
        src: "src/assets/logo/cloaked_cyber_colored_logo.svg", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "CloakedCyber",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            
            // Logo variations
            { 
                name: "Primary - Logo", 
                src: "src/assets/logo/cloaked_cyber_colored_logo.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version in thinner spaces with a white or light backgrounds.",
                size: "logo"
            },
            { 
                name: "Primary - Logo", 
                src: "src/assets/logo/cloaked_cyber_colored_logo.svg", // Add image path
                bg: "var(--color-rich-black)", 
                darkText: false,
                description: "Use this version in thinner spaces with a dark or brand-colored backgrounds.",
                size: "logo"
            },
            { 
                name: "Monochrome - Logo - Black", 
                src: "src/assets/logo/cloaked_cyber_black_logo.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For thinner spaces with a black and white print or single-color applications.",
                size: "logo"
            },
            { 
                name: "Monochrome - Logo - White", 
                src: "src/assets/logo/cloaked_cyber_white_logo.svg", // Add image path
                bg: "var(--color-deep-black)", 
                darkText: false,
                description: "For thinner spaces with a dark backgrounds where color is not permitted.",
                size: "logo"
            },

            // Wordmark variations
            {
                name: "Primary - Wordmark - Light", 
                src: "src/assets/logo/cloaked_cyber_colored_black_wordmark.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version in thinner spaces with a white or light backgrounds.",
                size: "wordmark"
            },
            { 
                name: "Primary - Wordmark - Dark", 
                src: "src/assets/logo/cloaked_cyber_colored_white_wordmark.svg", // Add image path
                bg: "var(--color-rich-black)", 
                darkText: false,
                description: "Use this version in thinner spaces with a dark or brand-colored backgrounds.",
                size: "wordmark"
            },
            { 
                name: "Monochrome - Wordmark - Black", 
                src: "src/assets/logo/cloaked_cyber_black_wordmark.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For thinner spaces with a black and white print or single-color applications.",
                size: "wordmark"
            },
            { 
                name: "Monochrome - Wordmark - White", 
                src: "src/assets/logo/cloaked_cyber_white_wordmark.svg", // Add image path
                bg: "var(--color-deep-black)", 
                darkText: false,
                description: "For thinner spaces with a dark backgrounds where color is not permitted.",
                size: "wordmark"
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