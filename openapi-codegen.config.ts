import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  hyperion: {
    from: {
      source: "url",
      url: `https://hyperion.dev.eclair.ec-lyon.fr/openapi.json`,
    },
    outputDir: "src/api",
    to: async (context) => {
      const filenamePrefix = "hyperion";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
