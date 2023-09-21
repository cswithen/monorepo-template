# Monorepo template

This repo uses lerna to leverage the power of monorepos. 


## Getting started

### Install dependencies

```bash
yarn install
```

### Run the project

```bash
yarn dev
```

this command will run the 'dev' script in all subsequent packages below this. Any change that is saved will trigger a rebuild of the package and a restart of the server.

### Run tests

```bash
yarn test
```

### Build the project

```bash
yarn build
```

## React

### Storybook

navigate to the react package and run

```bash
yarn start-storybook
```