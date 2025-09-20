import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "gif3a306",
  dataset: "production",
  title: "Planescape",
  apiVersion: "2025-09-18",
  basePath: "/admin",
  // plugins: [deskTool()],
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
