module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true, //font-extralight & font-thin
  },
  purge: ["./src/**/*.js", "./src/**/*.mdx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: [
        "-apple-system, BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      code: [
        "SFMono-Medium",
        "SF Mono",
        "Segoe UI Mono",
        "Roboto Mono",
        "Ubuntu Mono",
        "Menlo",
        "Consolas",
        "Courier",
        "monospace",
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },

    extend: {
      colors: {
        primary: {
          300: "#DEEBFF",
          400: "#B3D4FF",
          500: "#4C9AFF",
          600: "#2684FF",
          700: "#0065FF",
          800: "#0052CC",
          // primary actions, buttons, text links, for indicating progress and representing authentication
          900: "#0747A6",
        },
        // Red is mainly used for backgrounds in messages and in error states to draw attention to important information
        //  or actions that are destructive or block workflow. You'll find red used in components such as lozenges, banner,
        //  flag messages, buttons, illustrations, and typography.
        error: {
          300: "#FFEBE6",
          400: "#FFBDAD",
          500: "#FF8F73",
          600: "#FF7452",
          700: "#FF5630",
          // this is the primary color for this semantic color
          800: "#DE350B",
          900: "#BF2600",
        },
        // Yellow indicates a warning or that progress is impeded. Yellow feels right at home in components like lozenges,
        //  banners, flag messages, and buttons.
        warning: {
          300: "#FFFAE6",
          400: "#FFF0B3",
          500: "#FFE380",
          600: "#FFC400",
          700: "#FFAB00",
          // this is the primary color for this semantic color
          800: "#FF991F",
          900: "#FF8B00",
        },
        // We use green to indicate success or to celebrate a win. Green goes well with lozenges, badges, toggles,
        // messages, and illustrations. Keep in mind that our green is very vibrant, which can cause eye strain
        // in large doses. However, because of this vibrancy, it can also stand out well among many other elements
        // on a page, which is why it is a good choice for calls-to-action and buttons in marketing.
        success: {
          300: "#E3FCEF",
          400: "#ABF5D1",
          500: "#79F2C0",
          600: "#57D9A3",
          700: "#36B37E",
          // this is the primary color for this semantic color
          800: "#00875A",
          900: "#006644",
        },
        // Teal can typically be found in illustrations or as an accent color for components such a tags.
        accent: {
          300: "#E6FCFF",
          400: "#B3F5FF",
          500: "#79E2F2",
          600: "#00C7E6",
          700: "#00B8D9",
          // this is the primary color for this semantic color
          800: "#00A3BF",
          900: "#008DA6",
        },
        // Purple indicates help and support and is used in spotlight, buttons, messages, lozenges,
        // and image callouts. It is also used to display visited links in web typography and as an
        // accent color in illustration. However, it is best used in small doses in illustration as
        //  it can sometimes clash with blue.
        info: {
          300: "#EAE6FF",
          400: "#C0B6F2",
          500: "#998DD9",
          600: "#8777D9",
          700: "#6554C0",
          // this is the primary color for this semantic color
          800: "#5243AA",
          900: "#403294",
        },
        //  Dark neutrals are very effective for creating contrast and are therefore the primary color
        //  used for typography. Occasionally the dark neutrals are found in illustration but they rarely
        //  dominate the palette. Some exceptions are dark mode UI elements and illustrations.
        grayDark: {
          500: "#42526E",
          600: "#344563",
          700: "#253858",
          800: "#172B4D",
          // used primarily for body text and headings
          900: "#091E42",
        },
        // Use mid-neutrals to create depth in components such as modal dialog blankets and cards.
        // Avoid mid-neutrals as background colors because there is usually not enough contrast to
        // remain AA compliant. The mid-neutrals N900 to N700 can be used for subtle text and icons
        // on light-neutral backgrounds. You can find text style using these colors in typography
        grayMid: {
          200: "#B3BAC5",
          300: "#A5ADBA",
          400: "#97A0AF",
          500: "#8993A4",
          600: "#7A869A",
          700: "#6B778C",
          800: "#5E6C84",
          900: "#505F79",
        },
        // We use light neutrals as subtle backgrounds to indicate various interactive states such as hover and disabled,
        // or simply to create secondary attention towards a component. You'll find light neutrals in buttons, text fields,
        // tags, and illustrations. Light neutrals are helpful for offsetting content in a primarily white layout without
        // losing warmth and cleanliness and are therefore often used as a background color. Their subtlety allows for them
        // to be helpful in creating subtle shadows or depth in illustration, and they can also be helpful in depicting
        // illustrative objects that are typically made of metallic materials like hardware, or atmospheric elements in
        // illustrations, like clouds.
        grayLight: {
          500: "#FAFBFC",
          600: "#F4F5F7",
          700: "#EBECF0",
          800: "#DFE1E6",
          900: "#C1C7D0",
        },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  corePlugins: {},
  plugins: [],
}
