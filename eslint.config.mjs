// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import next from "eslint-config-next";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next,
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
      tailwind,
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      // Prettier
      "prettier/prettier": ["error"],
    },
    settings: {
      react: { version: "detect" },
    },
    ignores: ["node_modules", ".next", "out", "dist", "build"],
  }
);
