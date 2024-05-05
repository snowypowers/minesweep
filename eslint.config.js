import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export default [
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  eslintPluginPrettierRecommended,
];