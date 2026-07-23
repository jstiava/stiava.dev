import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@base-ui/react",
              message:
                "Import Base UI components from '@/components/ui/*' instead.",
            },
          ],
          patterns: ["@base-ui/react/*"],
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);