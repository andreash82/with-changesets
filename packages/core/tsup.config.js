import { postcssModules, sassPlugin } from "esbuild-sass-plugin";
import {defineConfig} from "tsup";
import pkg from "./package.json"

export default defineConfig({
  external: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)).concat(["virtual:icons"]),
  esbuildPlugins:[sassPlugin({filter: /\.module\.scss$/,
    transform: postcssModules({})})]
})