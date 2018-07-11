
 # Sunday Seven
A single page application for Sunday Seven Agency from Stockholm, Sweden. Sunday Seven (Söndag Den Sjunde AB) is an multi-brand fashion and distribution agency acting, managing and working with internationally recognized apparel brands.


### Installation
```shell
> git clone https://github.com/brixtol/s7
> cd s7
> yarn install
```

### Usage
```
yarn start
```
 Start the Webpack development server and opens the application on the browser with HMR.

```
yarn build
```
 Compiles the application for production, exporting compiled files into the `/dist` directory.

```
yarn production
```
Pushes the  `/dist` directory to the `gh-pages` branch, which in turn will deploy application into production.

```
yarn icons
```
Creates Icon set by exporting svg icons from `src/assets/icons` to `src/icons` and enables easy import into application.

```
yarn upload
```
Pushes the `dist` directory to the `gh-pages` branch.


### Github Pages Branch
Push `dist` directory to the `gh-pages` branch when updates are made using the `yarn upload` command.

```
git subtree push --prefix dist origin gh-pages
```


### Contributions
This single page application is a custom build for Sunday Seven Agency, thus contributions are handled internally within the company. Developers wanting to see a production ready Mithril.js application in the wild, this repository stands as an example for you. Feel free to use it as your starting point to projects.

Made with ❤️ by Nikolas Savvidis
