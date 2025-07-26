import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Obter o diretório atual do arquivo (necessário em módulos ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibilidade para usar configurações tradicionais no formato FlatConfig
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Configuração principal do ESLint
const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals", // Regras recomendadas do Next.js para performance
      "next/typescript",      // Regras específicas para TypeScript no Next.js
      "prettier"              // Desativa regras de ESLint conflitantes com o Prettier
    ],
    rules: {
      // Exige ponto e vírgula no final das linhas
      semi: ["error"],

      // Exige o uso de aspas duplas em vez de aspas simples
      quotes: ["error", "double"],

      // Prefere funções anônimas com arrow function
      "prefer-arrow-callback": ["error"],

      // Prefere template literals (`texto ${variavel}`) ao invés de concatenação com +
      "prefer-template": ["error"],

      // Erro se houver variáveis não utilizadas (ignora argumentos que começam com "_")
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      // Gera aviso (não erro) ao usar console.log (mas permite console.warn e console.error)
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  }),
];

export default eslintConfig;
