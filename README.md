# Turborepo Design System starter with Changesets

This is an internal monorepo example powered by Turborepo to test changeset workflow for pkg publishing with extra dependencies, adapted from example [Turborepo: with changesets](https://github.com/vercel/turbo/tree/main/examples/with-changesets). Versioning and package publishing is handled by [Changesets](https://github.com/changesets/changesets) and fully automated with GitHub Actions.

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `docs`: A placeholder documentation site powered by [Vite.js](https://vitejs.dev/)
- `@example/core`: core React components with SCSS Modules support via esbuild-sass-plugin (see tsup.config.js)
- `@example/utils`: shared React utilities
- `@example/icons`: svg icons package, resolved in package consumers via unplugin-icons/vite
- `tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-config-example`: ESLint preset


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit andreash82/with-changesets#main with-changesets
cd with-changesets
pnpm install
git init . && git add . && git commit -m "Init"
```

### Useful commands

- `pnpm run build` - Build all packages and the docs site
- `pnpm run dev` - Develop all packages and the docs site
- `pnpm run lint` - Lint all packages
- `pnpm run changeset` - Generate a changeset
- `pnpm run clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script) and reinits node_modules via `pnpm i`

### Changing the npm organization scope

The npm organization scope for this design system starter is `@example`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `example` with your desired scope
- Search and replace `@example` with your desired scope
- Re-run `pnpm install`

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

### typical worklow

```shell
## create changeset (each developer, anytime)
pnpm run changeset
### answer questions and fill changelog
### see files unter .changeset
## commit ;)

## apply changesets: via CI Job or central code manager
pnpm run version-packages
### this applies all current changesets to packages, e.g. setting version in package.json
## commit ;)

## publish: via CI Job or central code manager
## (opt) tag and run on tag?
pnpm run release
```

### npm

This repo has a non-existing dummy npm repository in `publishConfig`, remove it for actual usage

If you want to publish package to the public npm registry and make them publicly available, this is already setup.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
