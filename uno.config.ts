import { defineConfig } from "@unocss/vite";

import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { presetScrollbar } from "unocss-preset-scrollbar";

import { readFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
    presets: [
        presetUno(),
        presetScrollbar(),
    ],
    transformers: [transformerVariantGroup()],
    preflights: [
        {
            getCSS: ({ theme }: Record<string, any>) => {
                const preflightRaw = readFileSync(join(__dirname, "src", "res", "css", "preflight.scss"), "utf-8");
                let preflight = preflightRaw;
                const matches = preflightRaw.matchAll(/(theme)[^"]*/g);

                for (const match of matches) {
                    const instance = preflightRaw.substring(match.index!, match.index! + match[0].length).split(".");
                    const [category, property] = instance.slice(1);
                    preflight = preflight.replace(`"${instance.join(".")}"`, theme[category][property]);
                }

                return preflight;
            }
        }
    ],
    theme: {
        fontFamily: {
            mono: "Monaspace Flex"
        },
        colors: {
            // Background
            primary: "#231f34",
            secondary: "#1f1b2e",
            tertiary: "#1c1829",
            border: "#38354820",

            // Text
            header: "#ffffff",
            normal: "#fefef6",
            muted: "#e4e4dd",

            // Highlights
            accent: "#f6f6b1",
            "accent-alt": "#f9f9c8",
            selection: "#f6f6b130",
        }
    },
})
